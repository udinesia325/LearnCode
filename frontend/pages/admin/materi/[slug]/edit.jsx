import axios from "axios"
import { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import dynamic from "next/dynamic"
import { getCookie } from "cookies-next"
import decrypt from "../../../../lib/decrypt.js"
import { useEditor } from "@tiptap/react"
import StarterKit from '@tiptap/starter-kit'
import CustomEditor from "../../../../components/admin/CustomEditor.jsx"
import useNotify from "../../../../hooks/useNotify.jsx"
import { useRouter } from "next/router.js"


const Edit = ({ data }) => {
  const [title, setTitle] = useState(data.title)
  const [content, setContent] = useState(data.content)
  const [token, setToken] = useState("")
  const notify = useNotify()
  const router = useRouter()
  useEffect(() => {
    setToken(decrypt(getCookie("SECRET")))
  }, [])
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `<p>${data.content}</p>`,
  })
  const handleSubmit = async e => {
    e.preventDefault()
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/materies/${data.slug}`, {
      title, content: editor.getHTML()
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    notify("Berhasil di update")
    router.push("/admin/materi")
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className="bg-white shadow shadow-sm px-2 py-4  mt-5">
        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <span>untuk memasukan syntax highlighting, gunakan <span className="bg-light mx-2 px-3">&#96;&#96;&#96;js</span> tiga backtick diikuti extensi bahasa nya kemudian spasi</span>
        <CustomEditor editor={editor} />
        <button className="btn btn-sm btn-warning mt-2 fw-bold text-white ">Submit</button>
      </Form>
    </div>
  )
}

export default Edit

export const getServerSideProps = async (ctx) => {
  const slug = ctx.params.slug
  const response = await axios.get(`${process.env.BACKEND_URL}/api/materies/${slug}`)
  const { data } = response.data
  return {
    props: {
      data
    }
  }
}

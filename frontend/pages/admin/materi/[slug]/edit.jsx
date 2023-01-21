import axios from "axios"
import { useState } from "react"
import { Form } from "react-bootstrap"
import dynamic from "next/dynamic"
import {useEditor} from "@tiptap/react"
import StarterKit from '@tiptap/starter-kit'
import CustomEditor from "../../../../components/admin/CustomEditor.jsx"
const Edit = ({ data }) => {
  const [title, setTitle] = useState(data.title)
  const [content, setContent] = useState(data.content)
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: `<p>${data.content}</p>`,
  })
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(editor.getHTML())
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className="bg-white shadow shadow-sm px-2 py-4  mt-5">
        <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
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

import axios from "axios"
import { Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useEditor } from "@tiptap/react"
import CustomEditor from "../../../components/admin/CustomEditor.jsx"
import StarterKit from '@tiptap/starter-kit'
import useNotify from "../../../hooks/useNotify.jsx"
import { useRouter } from "next/router.js"
import { getCookie } from "cookies-next"
import decrypt from "../../../lib/decrypt.js"
import Link from "next/link"
const Create = ({ data }) => {
    const [title, setTitle] = useState("")
    const [lessonId, setLessonId] = useState(data[0].id) //ambil id data yang pertama sebagai default value
    const [token, setToken] = useState("")
    const router = useRouter()
    useEffect(() => {
        setToken(decrypt(getCookie("SECRET")))
    }, [])
    const notify = useNotify()
    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        content: "",
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editor.getHTML().length < 40) {
            // console.log("Content Minimal 40 karakter")
            notify("Konten harus memiliki minimal 40 karakter !", "error")
            return
        }

        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/materies`, {
            lesson_id: lessonId,
            title,
            content: editor.getHTML()
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
            <h1 className="mt-3 mb-4">Buat Materi</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Pilih Nama Lesson</Form.Label>
                    <Form.Select defaultValue={lessonId} onChange={e => setLessonId(e.target.value)}>
                        {data.map((d, _i) => (
                            <option key={_i} value={d.id}>{d.name}</option>

                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />

                <span>untuk memasukan syntax highlighting, gunakan <span className="bg-light mx-2 px-3">&#96;&#96;&#96;js</span> tiga backtick diikuti extensi bahasa nya kemudian spasi</span>
                <CustomEditor editor={editor} />
                <Form.Group className="mt-3">
                    <button type="submit" className="btn btn-sm btn-success px-3">Kirim</button>
                    <Link href="/admin/materi">
                        <a className="btn btn-sm btn-secondary ms-3">Kembali</a>
                    </Link>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Create

export const getServerSideProps = async () => {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/lessons`)
    const { data } = response.data
    return {
        props: {
            data
        }
    }
}

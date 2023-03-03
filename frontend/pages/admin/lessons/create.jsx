import { Form } from "react-bootstrap"
import { useRef, useEffect, useReducer } from 'react'
import Image from "next/image"
import { getCookie } from "cookies-next"
import decrypt from "../../../lib/decrypt.js"
import axios from "axios"
import { useRouter } from "next/router.js"
import createLessonReducer, { initialCreateLessonState } from "../../../reducers/createLesson"
import useNotify from "../../../hooks/useNotify.jsx"

const Create = () => {
    const nameRef = useRef(null)
    const descRef = useRef(null)
    const [{ image, file, token }, dispatch] = useReducer(createLessonReducer, initialCreateLessonState)
    const router = useRouter()
    const notify = useNotify()

    useEffect(() => {
        dispatch({ type: "SET_TOKEN", payload: decrypt(getCookie("SECRET")) })
    }, [])
    const handleImage = (e) => {
        dispatch({ type: "SET_IMAGE", payload: URL.createObjectURL(e.target.files[0]) })
        dispatch({ type: "SET_FILE", payload: e.target.files[0] })
    }
    const handleReset = () => {

        dispatch({ type: "SET_IMAGE", payload: "" })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", nameRef.current.value)
        formData.append("description", descRef.current.value)
        // jika ada image maka upload file nya
        if (image) {
            formData.append("image", file)
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lessons`, formData, {
                headers: {
                    "Content-Type": "multipart/formdata",
                    Authorization: `Bearer ${token}`,
                }
            })
            notify("Berhasil Menambahkan Lesson Baru !")
            router.push("/admin/lessons")
        } catch (error) {
            notify(error.response.data.message, "error")

        }
    }
    return (
        <div>
            <h1>Buat Lesson Baru</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required ref={nameRef} />
                    <Form.Text className="text-muted">
                        Judul untuk lesssons
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" accept=".jpg, .jpeg" onChange={handleImage} />
                    <Image src={image} width={image ? 200 : 0} height={image ? 200 : 0} className="my-3" /><br />
                    <Form.Text className="text-muted">
                        Gambar Yang Akan Di Tampilkan
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" required ref={descRef} />
                    <Form.Text className="text-muted">
                        Berikan Deskripsi Tambahan
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 d-flex gap-5" controlId="actionBtn">
                    <button type="submit" className="btn btn-primary ">Submit</button>
                    <button type="reset" className="btn btn-warning " onClick={handleReset }>Reset</button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Create

import axios from "axios"
import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import decrypt from "../../../../lib/decrypt.js"
import { getCookie } from "cookies-next"
import Image from "next/image"
import CustomBreadCrumbs from "../../../../components/CustomBreadCrumbs.js"
import useNotify from "../../../../hooks/useNotify.jsx"
import { useRouter } from "next/router.js"


const EditLesson = ({ data }) => {
    const [initialData, setInitialData] = useState({
        name: data.name,
        image: `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/lessons/${data.image}`,
        description: data.description
    })
    const [token, setToken] = useState("")
    const [file, setFile] = useState(null)
    const notify = useNotify()
    const router = useRouter()
    //name itu adalah nama inputan
    //e adalah binding event nya
    const handleInput = (name, event) => {
        const value = event.target.value
        setInitialData({
            ...initialData,
            [name]: value
        })
    }
    const handleImage = (event) => {
        setFile(event.target.files[0])
    }
    useEffect(() => {
        if (file) {
            setInitialData((prev) => {
                return {
                    ...prev,
                    image: URL.createObjectURL(file)
                }
            })
        } else {
            setInitialData((prev) => {
                return {
                    ...prev,
                    image: `${process.env.NEXT_PUBLIC_BACKEND_URL}/images/lessons/${data.image}`,
                }
            })

        }
    }, [file])
    useEffect(() => {
        setToken(decrypt(getCookie("SECRET")))
    }, [])
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("name", initialData.name)
        formData.append("description", initialData.description)
        // jika ada file maka tambahkan ke body
        if (file) {
            formData.append("image", file)
        }
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lessons/${data.name}`
        try {
            const response = await axios.patch(url, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            notify(response.data.message)
            router.push("/admin/lessons")
        } catch (error) {
            notify(error.response.data.message, "error")
        }
    }

    return (
            <div className="card border border-0 shadow shadow-sm px-2 mt-5 bg-white">
                <h2 className="mt-2 mb-4 text-center">Edit Lesson {data.name}</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" required placeholder="Name" value={initialData.name} onChange={handleInput.bind(this, "name")} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="file" accept=".jpg , .jpeg" placeholder="Image" onChange={handleImage} />
                        <Image src={initialData.image} width={200} height={200} className="my-3" /><br />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" required placeholder="Description" value={initialData.description} onChange={handleInput.bind(this, "description")} />
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex gap-5" controlId="actionBtn">
                        <button type="submit" className="btn btn-primary ">Submit</button>
                        <button type="reset" className="btn btn-warning " onClick={() => setFile(null)}>Reset</button>
                    </Form.Group>
                </Form>
            </div>
    )
}

export default EditLesson

export const getServerSideProps = async (ctx) => {
    const name = ctx.params.name
    const response = await axios.get(`${process.env.BACKEND_URL}/api/lessons/${name}`)
    return {
        props: {
            data: response.data.data
        }
    }
}

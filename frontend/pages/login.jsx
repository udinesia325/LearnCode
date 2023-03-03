import { Form } from "react-bootstrap"
import { useContext, useState } from "react"
import axios from "axios"
import { setCookie } from "cookies-next"
import { useRouter } from "next/router"
import encrypt from "../lib/encrypt"
import { ToastContext } from "../context/ToastProvider"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()
    const { notify } = useContext(ToastContext)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`
            const response = await axios.post(url, { email, password })
            const dataCookie = JSON.stringify(response.data.data.token)
            setCookie("SECRET", encrypt(dataCookie), {
                secure: true,
                maxAge: 3600 * 24 //sehari
            })
            notify("Selamat Datang Admin ! ")
            router.push("/admin")
        } catch (error) {
            setError(error.response.data.message)
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="card p-3 pb-5 mt-5 mx-auto border border-0 flex-column gap-3 ">
            <h2 className="text-center">Login</h2>
            <p className="text-danger">{error && error}</p>
            <Form.Group>
                <Form.Control type="email" required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>

                <Form.Control type="submit" value="Login" className="btn btn-sm btn-success" />
            </Form.Group>

        </form>
    )
}

export default Login

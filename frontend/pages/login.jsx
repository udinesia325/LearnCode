import { Form } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import { setCookie } from "cookies-next"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`
            const response = await axios.post(url,{email,password})
            setCookie("auth",JSON.stringify(response.data.data.token),{
                secure:true,
                maxAge:3600 * 24 // sehari
            })
            setCookie("foo","bar")
            console.log("setted")
        } catch (error) {
           setError(error.message)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
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

import { useRouter } from "next/router"
import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Container from "react-bootstrap/Container"
export default function Layout(props) {
    const [show, setShow] = useState(false)
    return (
        <div
            className="d-flex flex-column justify-content-between"
            style={{
                width: "100vw",
                height: "100vh",
            }}
        >
            <Header show={show} setShow={setShow} />
            <Container style={{ minHeight: "80vh" }}>
                {props.children}
            </Container>
            <Footer />
            <Sidebar show={show} setShow={setShow} />
        </div>
    )
}

import {Offcanvas} from "react-bootstrap"
import Link from "next/link"

function Sidebar({ show, setShow }) {
    const handleClose = () => setShow(false)

    return (
        <Offcanvas show={show} onHide={handleClose} style={{maxWidth:"80vw"}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>LearnCode</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div clasName="flex-column text-dark">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
    )
}

export default Sidebar

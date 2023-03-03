import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Header({ show, setShow }) {
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)
    }

    return (
        <Navbar variant="light" bg="white">
            <Container>
                <Navbar.Brand
                    href="#"
                    className="fa-solid fa-bars ms-3"
                    onClick={handleShow}
                ></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/" active>
                        LearnCode
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header

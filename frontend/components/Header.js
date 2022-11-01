import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

function Header({ show, setShow }) {
    const handleShow = (e) => {
        e.preventDefault()
        setShow(true)
    }

    return (
        <Navbar variant="light" bg="light">
            <Container>
                <Navbar.Brand
                    href="#"
                    className="bx bx-menu"
                    onClick={handleShow}
                ></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" active>
                        LearnCode
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header

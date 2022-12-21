import { ListGroup, Offcanvas } from "react-bootstrap"
import {useRouter} from "next/router"
import Link from "next/link"
const dataList = [
    {
        href:"/",
        icon:"fa-solid fa-house",
        text:"Home"
    },
    {
        href:"/lessons",
        icon:"fa-solid fa-book",
        text:"Lessons"
    },
    {
        href:"/about",
        icon:"fa-solid fa-newspaper-o",
        text:"About"
    }
]
function Sidebar({ show, setShow }) {
    const handleClose = () => setShow(false)
    const router = useRouter()
    if(router.asPath.startsWith("/admin")){
        console.log("your'e admin")
    }
    return (
        <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: "80vw" }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>LearnCode</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup variant="flush">
                    {
                        dataList.map((data,index)=>(
                    <ListGroup.Item key={index} className="d-flex">
                        <Link href={data.href}>
                            <a onClick={handleClose} className="text-dark fw-bold w-100"><i className={`me-4 ${data.icon}`}></i>{data.text}</a>
                        </Link>
                    </ListGroup.Item>


                        ))
                    }
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar

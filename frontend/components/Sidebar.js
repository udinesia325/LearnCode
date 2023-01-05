import { ListGroup, Offcanvas } from "react-bootstrap"
import {useRouter} from "next/router"
import {useState,useEffect} from "react"
import  datalistUser from "../lib/datalistUser";
import  datalistAdmin from "../lib/dataListAdmin.js";
import Link from "next/link"


function Sidebar({ show, setShow }) {
    const handleClose = () => setShow(false)
    const [isAdmin,setIsAdmin] = useState(false)
    const router = useRouter()
    useEffect(() => {
    if(router.asPath.startsWith("/admin")){
        setIsAdmin(true)
    }else{
        setIsAdmin(false)
    }
    },[])
    return (
        <Offcanvas show={show} onHide={handleClose} style={{ maxWidth: "80vw" }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>LearnCode</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ListGroup variant="flush">
                    {
                      isAdmin == false &&  datalistUser.map((data,index)=>(
                    <ListGroup.Item key={index} className="d-flex">
                        <Link href={data.href}>
                            <a onClick={handleClose} className="text-dark fw-bold w-100"><i className={`me-4 ${data.icon}`}></i>{data.text}</a>
                        </Link>
                    </ListGroup.Item>))
                    }
                    {
                      isAdmin == true &&  datalistAdmin.map((data,index)=>(
                    <ListGroup.Item key={index} className="d-flex">
                        <Link href={data.href}>
                            <a onClick={handleClose} className="text-dark fw-bold w-100"><i className={`me-4 ${data.icon}`}></i>{data.text}</a>
                        </Link>
                    </ListGroup.Item>))
                    }
                </ListGroup>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Sidebar

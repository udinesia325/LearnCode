import axios from "axios"
import Link from "next/link"
import { Row, Col, Card, Form, Modal, Button } from "react-bootstrap"
import Image from "next/image"
import { useState, useEffect } from "react"
import MateriCard from "../../../components/admin/MateriCard"
import { getCookie } from "cookies-next"
import decrypt from "../../../lib/decrypt.js"
import useNotify from "../../../hooks/useNotify.jsx"

const Index = ({ data }) => {
    const [materies, setMateries] = useState(data)
    const [keyword, setKeyword] = useState("")
    const [slug, setSlug] = useState("") // yang akan di hapus
    const notify = useNotify()
    const [token, setToken] = useState("")
    //console.log(materies)

    useEffect(() => {
        setToken(decrypt(getCookie("SECRET")))
    }, [])
    const handleDelete = (slug) => {
        setShow(true)
        setSlug(slug)
    }
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    const Delete = async () => {
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/materies/${slug}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }

        })
        if (response.data.success == true) {
            notify("berhasil di hapus")
            setShow(false)
            setMateries([...materies.map(m => {
                if (m.slug != slug) return { ...m }
            })])
            setSlug("")
        }
    }

    return (
        <div>
            <h1 className="mt-3 ms-3">Kelola Materi</h1>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Peringatan !</Modal.Title>
                </Modal.Header>
                <Modal.Body>Apakah anda yakin ingin menghapush ? </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Batal
                    </Button>
                    <Button variant="danger" onClick={Delete}>
                        Konfirmasi
                    </Button>
                </Modal.Footer>
            </Modal>
            <Row className="mb-3 justify-content-center">
                <Col xs={12}>
                    <Link href="/admin/materi/create" ><a className="btn btn-sm btn-success mt-3 mb-4">Buat Materi</a></Link>
                </Col>
                <Col xs={10} md={8} lg={5}>
                    <Form.Control value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Cari Materi" />
                </Col>
            </Row>
            <Row>
                {materies.filter(m => m?.slug.toLowerCase().includes(keyword.toLowerCase())).map((materi, index) => (
                    <MateriCard {...materi} handleDelete={handleDelete} key={index} />
                ))}
            </Row>
        </div>
    )
}



export default Index


export const getServerSideProps = async () => {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/materies`)
    const { data } = await response.data
    return {
        props: { data }
    }
}

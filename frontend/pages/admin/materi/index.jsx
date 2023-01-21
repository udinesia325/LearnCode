import axios from "axios"
import Link from "next/link"
import { Row, Col, Card,Form } from "react-bootstrap"
import Image from "next/image"
import { useState } from "react"
import MateriCard from "../../../components/admin/MateriCard"

const Index = ({ data }) => {
    const [materies, setMateries] = useState(data)
    const [keyword, setKeyword] = useState("")
    console.log(materies)

    return (
        <div>
            <h1 className="mt-3 ms-3">Kelola Materi</h1>
            <Row className="mb-3 justify-content-center">
                <Col xs={10} md={8} lg={5}>
            <Form.Control value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="Cari Materi"  />
                </Col>
            </Row>
            <Row>
                {materies.filter(m => m.slug.toLowerCase().includes(keyword.toLowerCase())).map((materi,index) => (
                    <MateriCard {...materi} key={index} />
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

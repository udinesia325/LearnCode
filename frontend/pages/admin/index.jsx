import axios from "axios"
import { Col, Row, Card } from "react-bootstrap"
import Link from "next/link"

const Index = ({ data }) => {
    console.log(data)
    const { users, materies, lessons } = data
    return (
        <Row className="mt-5">
            <CardIndex title="Lessons" icon="fa-solid fa-book" total={lessons} href="/admin/lessons" />
            <CardIndex title="Users" icon="fa-solid fa-users" total={users} href="/admin/users" />
            <CardIndex title="materies" icon="fa-solid fa-book-bookmark" total={materies} href="/admin/materi" />
        </Row>
    )
}
function CardIndex({ title, icon, total, href = "" }) {
    return (
        <Col sm={12} md={4} lg={3} className="mb-4 card-admin-index" >
            <Card className="border border-0 shadow shadow-sm" style={{ minHeight: "120px" }}>
                <Card.Body>
                    <Row className="justify-content-around align-items-center">
                        <Col xs={8} className="ps-5"><span>{title}</span><h1 className="fw-bold" >{total}</h1></Col>
                        <Col xs={4} ><i className={`${icon} fa-2x`}></i></Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="text-muted text-center">
                    <Link href={href}>
                        <a>
                            <i className="fa-solid fa-share-from-square me-2"></i> Kelola
                        </a>
                    </Link>

                </Card.Footer>
            </Card>
        </Col>
    )
}
export default Index
export const getServerSideProps = async (ctx) => {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/dashboard`)
    // console.log(response.data)
    return {
        props: { data: response.data.data }
    }
}

import Link from "next/link"
import { Col, Card } from "react-bootstrap"

export default function LessonItem({ name, description, image, href }) {
    return (
        <Col xs={6} md={3} lg={2}>
            <Card className="shadow-sm" style={{ height: "20em" }}>
                <Card.Img
                    variant="top"
                    src={`http://localhost:4000/images/lessons/${image}`}
                />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className="line-clamp">{description}</span>
                        <Link href={href}>
                            <a className="btn btn-info fw-bold text-white fs-6 w-100">
                                Learn
                            </a>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

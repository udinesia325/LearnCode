import Link from "next/link"
import { Col, Card } from "react-bootstrap"
import { useState } from "react";

export default function LessonItem({ name, description, image, href }) {
    const [isLoading , setIsLoading] = useState(false)
    return (
        <Col xs={6} md={3} lg={2}>
            <Card className="shadow shadow-sm border border-0" >
                <Card.Img
                    variant="top"
                    src={`http://localhost:4000/images/lessons/${image}`}
                />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <span className="line-clamp">{description}</span>
                        <Link href={href}>
                            <a className="btn btn-info fw-bold text-white fs-6 w-100 mt-2" onClick={() => setIsLoading(true)}>
                                {isLoading ? "Memuat ...":"Pelajari"}
                            </a>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

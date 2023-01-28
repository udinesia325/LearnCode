import Link from "next/link"
import { Card, Row, Col } from "react-bootstrap"
import { useState } from "react"
const MateriCard = ({ slug, lesson, handleDelete }) => {
    return (
        <>
            <Col xs={12} md={4} lg={3} className="mb-3">
                <Card>
                    <Card.Body>
                        {slug}
                    </Card.Body>
                    <Card.Footer>
                        <Row className="row-cols-3 justify-content-evenly text-center">
                            <Col>
                                <a href={`/lessons/${lesson.name}/${slug}`} target="_blank" rel="noopener noreferrer">
                                    <i className="fa-solid fa-eye"></i></a>
                            </Col>

                            <Col>
                                <Link href={`/admin/materi/${slug}/edit`}><a>
                                    <i className="fa-solid fa-file-pen"></i></a>
                                </Link>

                            </Col>
                            <Col><i className="fa-solid fa-trash-can" onClick={handleDelete.bind(this,slug)}></i></Col>

                        </Row>
                    </Card.Footer>

                </Card>
            </Col>
        </>
    )
}

export default MateriCard

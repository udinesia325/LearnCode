import { Col, Row, Card } from "react-bootstrap"
import Layout from "../components/Layout"
import Link from "next/link"
import Image from "next/image"
export default function Home() {
    return (
        <>
            <Row className="justify-content-center gap-5">
                <Col xs={12} className="d-flex justify-content-center">
                    <Image
                        src="/images/apps_games_main.png"
                        width="250em"
                        height="200em"
                    />
                </Col>
                <Col xs={12}>
                    <h1 className="fs-1 text-center">
                        Learn Code - Your Guide Of Programming
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-evenly">
                <CardHome
                    color="#3479AB"
                    href="/"
                    icon="fa fa-home"
                    title="Home"
                />
                <CardHome
                    color="#4CAF50"
                    href="/lessons"
                    icon="fa fa-rocket"
                    title="Learn"
                />
                <CardHome
                    color="#E91E63"
                    href="/"
                    icon="fa fa-gamepad"
                    title="Sampel"
                />
                <CardHome
                    color="#673AB7"
                    href="https://learncodeteam.blogspot.com"
                    icon="fa fa-newspaper-o"
                    title="News"
                />
                <CardHome
                    color="#FF9800"
                    href="/404"
                    icon="fa fa-user"
                    title="About"
                />
            </Row>
        </>
    )
}
function CardHome({ color, icon, href, title }) {
    return (
        <Col xs={4} sm={3} md={2}>
            <Card
                style={{
                    background: color,
                    width: "100px",
                    height: "100px",
                }}
            >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                    <Link href={href}>
                        <a>
                            <i className={`${icon} text-white fs-1`}></i>
                        </a>
                    </Link>
                    <span className="text-white fw-bold">{title}</span>
                </Card.Body>
            </Card>
        </Col>
    )
}

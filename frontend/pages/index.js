 import { Col, Row, Card } from "react-bootstrap"
import Layout from "../components/Layout"
import Link from "next/link"
import Image from "next/image"
export default function Home() {
    return (
        <>
            <Row className="justify-content-center gap-5 gap-y-4">
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
            <Row className="g-3 mt-4">
                <CardHome
                    href="/"
                    icon="fa fa-home"
                    title="Home"
                />
                <CardHome
                    href="/lessons"
                    icon="fa-solid fa-book"
                    title="Learn"
                />
                <CardHome
                    href="https://learncodeteam.blogspot.com"
                    icon="fa fa-newspaper-o"
                    title="Blog"
                />
                <CardHome
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
        <Col xs={6} md={4} className="d-flex flex-column justify-content-center align-items-center mb-4">

                    <Link href={href}>
                        <a>
                            <i className={`${icon} text-dark`} style={{fontSize:"3em"}}></i>
                        </a>
                    </Link>
                    <span className="fw-bold">{title}</span>

        </Col>
    )
}

import { Col, Row, Card } from "react-bootstrap"
import { useRouter } from "next/router"
import Link from "next/link"
import Image from "next/image"
export default function Home() {
    return (
        <>
            <Row className="justify-content-center mt-4">
                <Col sm={5} className="d-flex justify-content-center">
                    <Image
                        src="/images/apps_games_main.png"
                        width="250em"
                        height="200em"
                    />
                </Col>
                <Col sm={5} className="d-flex align-items-center hero-text">
                    <h1 className="fs-1 md-left">
                        Learn Code - Your Guide Of Programming
                    </h1>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center gap-2">
                <CardHome
                    href="/lessons"
                    icon="fa-solid fa-book"
                    title="Learn"
                    description="Pelajari banyak hal tentang programming disini"
                />
                <CardHome
                    href="https://learncodeteam.blogspot.com"
                    icon="fa fa-newspaper-o"
                    title="Blog"
                    description="Jangan lewatkan postingan terbaru dari kami ! "
                />
                <CardHome
                    href="/404"
                    icon="fa fa-user"
                    title="About"
                    description="Kenali lebih dalam tentang kami"
                />
            </Row>
        </>
    )
}
function CardHome({ icon, href, title, description }) {
    const router = useRouter()
    const handleClick = () => {
        router.push(href)
    }
    return (
        <Col xs={11} md={3} className="d-flex flex-column justify-content-center align-items-center mb-4 px-3 py-4 rounded pointer bg-white" onClick={handleClick}>

            <i aria-hidden="true" className={`${icon} text-dark`} style={{ fontSize: "3em" }}></i>
            <span className="fw-bold">{title}</span>
            <p className="text-center">{description}</p>

        </Col>
    )
}

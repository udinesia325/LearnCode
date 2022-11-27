import MateriesItem from "../../../components/MateriesItem"
import Link from "next/link"
import { Container, Row, Breadcrumb } from "react-bootstrap"
import CustomBreadCrumbs from "../../../components/CustomBreadCrumbs"
export default function Lesson({ result }) {
    const { name } = result.data
    if (result.data.materies.length == 0) {
        return <p>Materi Akan Segera Kami Rilis :)</p>
    }
    return (
        <Container>
            <CustomBreadCrumbs />
            <Row className="gap-3 mt-3">
                {result.data.materies.map((materi, index) => (
                    <MateriesItem key={index} head={`#${index + 1} ${name}`} title={materi.title} href={`/lessons/${name}/${materi.slug}`} />
                ))}
            </Row>
        </Container>
    )
}
export async function getStaticPaths() {
    const response = await fetch("http://localhost:4000/api/lessons")
    const result = await response.json()
    const paths = result.data.map((lesson) => {
        return {
            params: { lesson: lesson.name },
        }
    })
    return {
        paths, //looping setiap path
        fallback: false, //404 jika tidak ada data
    }
}
export async function getStaticProps({ params }) {
    const response = await fetch(
        `http://localhost:4000/api/lessons/${params.lesson}`
    )
    const result = await response.json()
    return {
        props: {
            result,
        },
    }
}

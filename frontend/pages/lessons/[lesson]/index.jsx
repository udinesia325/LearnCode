import MateriesItem from "../../../components/MateriesItem"
import LessonEmpty from "../../../components/LessonEmpty.js";
import { Container, Row } from "react-bootstrap"
import CustomBreadCrumbs from "../../../components/CustomBreadCrumbs"
export default function Lesson({ result }) {
    const { name } = result.data
    if (result.data.materies.length == 0) {
        return <LessonEmpty />
    }
    return (
        <Container>
            <CustomBreadCrumbs />
            <Row className="gap-3 mt-3 justify-content-center">
                {result.data.materies.map((materi, index) => (
                    <MateriesItem key={index} head={`#${index + 1} ${name}`} title={materi.title} href={`/lessons/${name}/${materi.slug}`} />
                ))}
            </Row>
        </Container>
    )
}
export async function getStaticPaths() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lessons`)
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
        `${process.env.BACKEND_URL}/api/lessons/${params.lesson}`
    )
    const result = await response.json()
    return {
        props: {
            result,
        },
    }
}

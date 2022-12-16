import CustomBreadCrumbs from "../../../components/CustomBreadCrumbs"
import { useEffect } from "react"

export default function LessonSlug({ result }) {
    const { title, content, created_at, user } = result.data
    return (
        <>
            <CustomBreadCrumbs />
            <h1 style={{ fontSize: "2.5em" }} className="font-secondary">{title}</h1>
            <p className="fw-bold text-secondary" style={{ fontSize: '0.6em' }}>Penulis : {user.name} | {new Date(created_at).toLocaleDateString()}</p>
            <p>{content}</p>
        </>
    )
}
export async function getStaticPaths() {
    const response = await fetch("http://localhost:4000/api/materies")
    const result = await response.json()
    const paths = result.data.map((materi) => {
        return {
            params: { lesson: materi.lesson.name, slug: materi.slug },
        }
    })
    return {
        paths, //looping setiap path
        fallback: false, //404 jika tidak ada data
    }
}
export async function getStaticProps({ params }) {
    const response = await fetch(
        `http://localhost:4000/api/materies/${params.slug}`
    )
    const result = await response.json()
    return {
        props: {
            result,
        },
    }
}

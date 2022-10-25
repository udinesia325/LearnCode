export default function LessonSlug({ result }) {
    const { title, slug, content, created_at ,user} = result.data
    return (
        <>
            <h1>{title}</h1>
            <p>{content || ""}</p>
            <p>Di Buat Pada {new Date(created_at).toLocaleString()} Oleh {user?.name}</p>
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

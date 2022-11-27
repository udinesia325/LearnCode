import CustomBreadCrumbs from "../../../components/CustomBreadCrumbs"
export default function LessonSlug({ result }) {
    const { title, slug, content, created_at, user } = result.data
    return (
        <>
            <CustomBreadCrumbs />
            <div className="d-flex flex-column gap-2">
                <span><i className="fa-solid fa-file-pen"></i> Di tulis oleh : {user?.name}</span>

                <span><i className="fa-regular fa-clock"></i> Dirilis : { new Date(created_at).toLocaleString()}</span>
            </div>
            <h1>{title}</h1>
            <p>{content || ""}</p>
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

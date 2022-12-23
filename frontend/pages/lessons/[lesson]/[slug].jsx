import CustomBreadCrumbs from "../../../components/CustomBreadCrumbs"

export default function LessonSlug({ result }) {
    const { title = '', content = '', created_at, user = { name: '' } } = result.data
    return (
        <>
            <CustomBreadCrumbs />
            <h1 style={{ fontSize: "2.5em" }} className="font-secondary">{title}</h1>
            <p className="fw-bold text-secondary" style={{ fontSize: '0.6em' }}>Penulis : {user.name} | {created_at}</p>
            <section dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}
export async function getStaticPaths() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/materies`)
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
        `${process.env.BACKEND_URL}/api/materies/${params.slug}`
    )
    const result = await response.json()
    result.data.created_at = new Date(result.data.created_at).toLocaleDateString()
    return {
        props: {
            result,
        },
    }
}

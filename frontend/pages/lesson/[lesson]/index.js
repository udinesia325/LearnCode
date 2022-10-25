import LessonItem from "../../../components/LessonItem"
import LessonLayout from "../../../components/LessonLayout"

export default function Lesson({ result }) {
		const {name} = result.data
		if(result.data.materies.length == 0){
				return <p>Materi Akan Segera Kami Rilis :)</p>
		}
    return (
        <LessonLayout>
            {result.data.materies?.map((materi, index) => (
                <LessonItem
                    key={index}
                    name={`${index}# ${name}`}
                    description={materi.title}
                    image={result.data.image}
										href={`/lesson/${name}/${materi.slug}`}
                />
            ))}
        </LessonLayout>
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

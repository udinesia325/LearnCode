import LessonItem from "../../components/LessonItem"

export default function Lessons({ data }) {
    if (!data) {
        return <p>Loading...</p>
    }
    return (
        <>
            <input
                type="text"
                name="search_app"
                placeholder="Search ..."
                className="search_app"
            />
            <div className="items_area">
                {data.data &&
                    data.data.map((data, index) => (
                        <LessonItem
                            key={index}
                            name={data.name}
                            description={data.description}
                            image={data.image}
                            href={"/lesson/" + data.name}
                        />
                    ))}
            </div>
        </>
    )
}
export async function getStaticProps(ctx) {
    const url = "http://localhost:4000/api/lessons"
    const response = await fetch(url)
    const data = await response.json()
    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data },
        revalidate: 30,
    }
}

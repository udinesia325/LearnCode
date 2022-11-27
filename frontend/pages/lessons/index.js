import LessonItem from "../../components/LessonItem"
import { Row, Container } from "react-bootstrap"
import {useState} from "react"
import CustomBreadCrumbs from "../../components/CustomBreadCrumbs"

export default function Lessons({ data }) {
    const [filter,setFilter] = useState("")
    const handleChange = e => {
        setFilter(e.target.value)
    }
    if (!data) {
        return <p>Loading...</p>
    }
    return (
        <>
            <CustomBreadCrumbs />
            <input
                type="text"
                name="search_app"
                onChange={handleChange}
                value={filter}
                placeholder="Search ..."
                className="form-control my-3"
            />

            <Row className="g-3">
                {data.data &&
                        data.data.filter( d => d.name.toLowerCase().includes(filter.toLowerCase())).map((data, index) => (
                        <LessonItem
                            key={index}
                            {...data}
                            href={"/lessons/" + data.name}
                        />
                    ))}
            </Row>
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

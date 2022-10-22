import Image from "next/image"
import Link from "next/link"

export default function LessonItem({ name, description, image }) {
    return (
        <div className="item">
            <Image
                src={`http://localhost:4000/${image}`}
                width={"100px"}
                height={"100px"}
                placeholder={image}
            />
            <h2>{name}</h2>
            <p>{description}</p>
            <Link href={`/lesson/${name}`}>
                <a className="download_btn">Baca Yuk</a>
            </Link>
        </div>
    )
}

import Image from "next/image"

const LessonsTable = ({ index, name, image, description }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/lessons/${image}`}
                    alt={`${image}`}
                    width={500}
                    height={500}
                />
            </td>
            <td>{description}</td>
            <td>Table cell</td>
        </tr>
    )
}

export default LessonsTable

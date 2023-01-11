import Image from "next/image"

const LessonsTable = ({ index, name, image, description,handleDelete,handleEdit }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/lessons/${image}`}
                    alt={`${image}`}
                    width={100}
                    height={100}
                />
            </td>
            <td>{description}</td>
            <td>
                <button className="btn btn-sm btn-danger" onClick={handleDelete.bind(this,name)}>Delete</button>
                <button className="btn btn-sm btn-info" onClick={handleEdit.bind(this,name)}>Edit</button>
            </td>
        </tr>
    )
}

export default LessonsTable

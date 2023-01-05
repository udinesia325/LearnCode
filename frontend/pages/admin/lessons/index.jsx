import axios from "axios"
import { Table } from "react-bootstrap"
import Link from "next/link"
import LessonsTable from "../../../components/admin/LessonsTable"

const AdminLessons = ({ result }) => {

    return (
        <div>
            <Link href="/admin/lessons/create">
                <a className="btn btn-sm btn-success mt-5 mb-3"><i className="fa-regular fa-square-plus me-3"></i>Add New</a>
            </Link>
            <Table responsive="sm" striped className="align-middle">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {result.data.map((d, i) => (
                        <LessonsTable key={i} {...d} index={i} />
                    ))
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default AdminLessons
export async function getServerSideProps({ req, res }) {
    //caching
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    const response = await axios.get(`${process.env.BACKEND_URL}/api/lessons`)
    const result = await response.data
    return {
        props: { result }
    }
}

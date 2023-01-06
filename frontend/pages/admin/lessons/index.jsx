import axios from "axios"
import { Form, Table,Modal,Button } from "react-bootstrap"
import Link from "next/link"
import LessonsTable from "../../../components/admin/LessonsTable"
import { useState ,useEffect,useContext} from "react"
import { getCookie } from "cookies-next"
import decrypt from "../../../lib/decrypt.js"
import {ToastContext} from '../../../context/ToastProvider.jsx'


const AdminLessons = ({ result }) => {
    const [lessons, setLessons] = useState(result)
    const [keyword, setKeyword] = useState("")
    const [show , setShow ] = useState(false)
    const [token, setToken] = useState("")
    const {notify} = useContext(ToastContext)
    //nama lesson yang ingin di hapus
    const [selectedName, setSelectedName] = useState("")
    const handleChange = e => {
        setKeyword(e.target.value)
    }
    // ambil nama dari tiap lessons
    const handleDelete = (name) => {
        setSelectedName(name)
    }
    const handleClose = () =>{
        setShow(false)
        setSelectedName("")
    }
    const handleShow= () =>setShow(true)
    useEffect(() => {
      setToken(decrypt(getCookie("SECRET")))
    }, [])
    useEffect(() => {
        setShow(selectedName ? true : false)
    }, [selectedName])
    const handleDeleteApi = async () => {
        if(selectedName){
            try{
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/lessons/${selectedName}`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
        // tutup modal
        handleClose()
        // keluarkan notifikasi
        notify(response.data.message)
        //filter state
        setLessons(lessons => {
            return {...lessons,data: [...lessons.data.filter(lesson => lesson.name != selectedName)]}
        })
        // kembalikan name target menjadi kosong lagi
        setSelectedName("")
            }catch(error){
        notify(error.response.data.message,"error")
                //console.log(error)
            }
        }else{
            //code here
        }
    }
    return (
        <div>
            <Modal
        show={show}
        backdrop="static"
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Apakah Anda Yakin Ingin Menghapus ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tindakan ini akan menghapus lesson beserta materi yang terkait dengan lesson ini
            <span className="text-danger d-block">Setelah terhapus, data tidak dapat di kembalikan</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="danger" onClick={handleDeleteApi}>Lanjutkan</Button>
        </Modal.Footer>
      </Modal>
            <Link href="/admin/lessons/create">
                <a className="btn btn-sm btn-success mt-5 mb-3"><i className="fa-regular fa-square-plus me-3"></i>Add New</a>
            </Link>
            <Form.Group>
                <Form.Control type="text" value={keyword} placeholder="Cari Lesson ..." onChange={handleChange} />
            </Form.Group>
            <Table responsive="sm" striped className="align-middle bg-white shadow shadow-sm mt-3 mb-5 ">
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
                    {lessons.data.filter(d => {
                        return d.name.toLowerCase().includes(keyword.toLowerCase())
                    }).map((d, i) => (
                        <LessonsTable key={i} {...d} index={i} handleDelete={handleDelete} />
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

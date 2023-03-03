import CustomBreadCrumbs from "./CustomBreadCrumbs.js"
import Image from "next/image"
import writer from "../public/assets/writer.svg"
const LessonEmpty = () => {
    return( 
            <>
                <CustomBreadCrumbs />
                <div className="d-flex flex-column justify-content-center">
                <Image src={writer} width="200px" height="200px"/>
                <p className="text-center mt-3">Materi Akan Segera Kami Rilis :)</p>
                </div>
            </>)
}
export default LessonEmpty

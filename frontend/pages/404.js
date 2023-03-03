import Image from "next/image"
import _404 from "../public/assets/404.svg"
export default function Custom404() {
    return (
        <div className="d-flex flex-column gap-3 mt-5" >
            <Image src={_404} width="200px" height="200px" priority />
<h2 className="text-center">Oops</h2>
            <p className="text-center"> halaman tersebut tidak dapat kami temukan !</p>
        </div>
    )
}

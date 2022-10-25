import Image from "next/image"
import _404 from "../public/assets/404.svg"
export default function Custom404() {
    return (
        <>
            <Image src={_404} width="200px" height="200px" priority />
            <p>
                <h4
                    style={{
                        display: "inline",
                    }}
                >
                    Oops!
                </h4>{" "}
                halaman tersebut tidak dapat kami temukan !
            </p>
        </>
    )
}

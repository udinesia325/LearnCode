import { useRouter } from "next/router"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

export default function Layout(props) {
    return (
        <div
            id="header"
            align="center"
            style={{
                paddingTop: "100px",
                paddingBottom: "100px",
            }}
        >
            <center>{props.children}</center>
            <Footer />
            <Sidebar />
        </div>
    )
}

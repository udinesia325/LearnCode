import Link from "next/link"
import { useRouter } from "next/router"
import { Breadcrumb } from "react-bootstrap"

const CustomBreadCrumbs = () => {
    const router = useRouter().asPath.split("/")
    const paths = []
    for (let i = 0; i < router.length; i++) {
        let str = ""
        for (let j = 1; j <= i; j++) {
            str += "/" + router[j]
        }
        paths.push({ url: str || "/", text: router[i] || "Home" })
    }
    const handleClick = (e, url) => {
        e.preventDefault()
        router.push(url)
    }
    return (
        <Breadcrumb className="px-2 py-4">
            {paths.map((path, index) => {
                if (index == paths.length - 1) {
                    return (

                        <li key={index} className="breadcrumb-item active">
                            {path.text}
                        </li>
                    )
                }
                return (
                    <li key={index} className={`breadcrumb-item`}>
                        <Link href={path.url}>
                            <a>{path.text}</a>
                        </Link>
                    </li>
                )
            })}
        </Breadcrumb>
    )
}
export default CustomBreadCrumbs

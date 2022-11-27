import Layout from "../components/Layout"
import "../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp

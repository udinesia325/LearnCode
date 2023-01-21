import Layout from "../components/Layout"
import "../styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from "react-toastify";
import ToastProvider from "../context/ToastProvider";
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <ToastProvider>
                <ToastContainer />
                <Component {...pageProps} />
            </ToastProvider>
        </Layout>
    )
}

export default MyApp

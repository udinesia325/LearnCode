import { createContext } from "react"
import { toast } from "react-toastify"
export const ToastContext = createContext(null)
const ToastProvider = ({ children }) => {
    const notify = (msg, type = "success") => toast[type](msg, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
    return (
        <ToastContext.Provider value={{ notify }}>
            {children}
        </ToastContext.Provider>
    )
}

export default ToastProvider

import { useContext } from "react"
import { ToastContext } from "../context/ToastProvider"

const useNotify = () => {
    const { notify } = useContext(ToastContext)
    return notify
}

export default useNotify

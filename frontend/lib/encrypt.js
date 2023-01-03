import CryptoJS from "crypto-js";

export default function encrypt(data) {
    return CryptoJS.AES.encrypt(data, process.env.NEXT_PUBLIC_SECRET_KEY)
}




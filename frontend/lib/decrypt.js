import CryptoJS from "crypto-js";

export default function decrypt(data) {
    return CryptoJS.AES.decrypt(data, process.env.NEXT_PUBLIC_SECRET_KEY)
}




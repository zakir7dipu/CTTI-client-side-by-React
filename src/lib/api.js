import axios from "axios";
import "./config";

const basePath = global.config.base_path
function Api () {

    const csrf = () => {
        return {
            "Content-type": "application/json",
            token: `Bearer `
        }
    }

    const gust = () => {
        return {
            "Content-type": "application/json",
        }
    }

    const header = gust

    const api = axios.create({
        baseURL: `${basePath}/api/`,
        headers: {
            "Content-type": "application/json",
            // Authorization: `Bearer ${auth.getAuthorisation()}`
        }
    })

    return {
        api
    }
}

export default Api;
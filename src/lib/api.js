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
            Authorization: `Bearer 2267a40ab14deb6d07e9b767405c8765c23789425c271ce8e68c0459a2d9739f4d653b487c8becf0936fb63afbee8404e56bef945214d872f27c23d383f09df88d8eb0c74219f008c3aaf01a7e6b0541d476859cc4523da97ef8d1d3f63298a98d903e503eb52a253690ca43a1b786310f04b30d0448cda18cf76a8225462f80`
        }
    })

    return {
        api
    }
}

export default Api;
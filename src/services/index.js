import axios from "axios"
import config from "./config"

export const rootPath = "https://gantikaos.fakta.website/api/v1"



const GET = async (path,config) => {

    try {

        const response = await axios.get(rootPath+path, config)

        return response

    } catch(err){

        console.error(err)

    }

}
const POST = async (path, config) => {

    try {

        const response = await axios.post(rootPath+path, config)

        return response

    } catch(err){

        console.error(err)

    }

}

const getProduct = () => GET(config.allProduct.path, config.allProduct.endpoint)
const postAuthApp = () => POST(config.authApp.path, config.authApp.endpoint)

const API = {

    getProduct,
    postAuthApp,
    
}

export default API
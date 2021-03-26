import axios from "axios"
import config from "./config"
import { getToken } from "./token"

export const rootPath = "https://gantikaos.fakta.website/api/v1"

export const GET = async (path, token = getToken(), bodyParameters = {}) => {

    try {

        const authorization = {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }

        const response = await axios.get(rootPath+path, bodyParameters, authorization)
        
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


const getProduct  = () => GET(config.allProduct.path, config.allProduct.params)
const postAuthApp = () => POST(config.authApp.path, config.authApp.params)

const API = {

    getProduct,
    postAuthApp,
    
}

export default API
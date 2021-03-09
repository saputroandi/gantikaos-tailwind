import axios from "axios"
import token from "./token"

const rootPath = "https://gantikaos.fakta.website/api/v1"


const GET = async (path) => {
    try {
        let config = {
            headers : {
                'Authorization' : `Bearer ${token.gantiKaos}`
            }
        }
        const response = await axios.get(`${rootPath}${path},${config}`)
        console.log(response)
    } catch(err){
        console.error(err)
    }
}

const getProduct = () => GET('/products')

const API = {
    getProduct,
}

export default API
import axios from "axios"
import API, { rootPath } from "./index"

const token = {
    gantiKaos : localStorage.getItem("token")
}



axios.interceptors.response.use((response) => {
    return response
}, async (err) => {
    let value = await API.postAuthApp()
    // axios.defaults.headers.common['Authorization'] = `Bearer ${value.data.token}`
    localStorage.setItem("token", value.data.token)
    let response = await API.getProduct()
    return response
})


export default token
import axios from "axios"
import API, { rootPath } from "./index"

export const checkToken = async () => {

    let localToken       = localStorage.getItem("token")
    let localExpiredTime = localStorage.getItem("expiredToken")

    if( !localToken || !localExpiredTime || localExpiredTime < Date.now() ) {

        try {
            
            let value = await API.postAuthApp().then((val) => {
                return val.data.token
            })
    
            localStorage.setItem( "token", value )
            localStorage.setItem( "expiredToken", Date.now()+169200000 )
            axios.defaults.headers.common['Authorization'] = `Bearer ${value}`
    
            return value

        } catch (error) {

            console.log("checkToken "+error)

        }

    }

    axios.defaults.headers.common['Authorization'] = `Bearer ${localToken}`

    return {

        localToken,
        localExpiredTime,
        
    }

}

export const getToken = () => {
    let token = localStorage.getItem("token")
    return token
}

// axios.interceptors.response.use((response) => {
//     return response
// }, async (err) => {
//     let response = await API.getProduct()
//     return response
// })
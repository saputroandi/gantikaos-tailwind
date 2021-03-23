
import token from "./token"


const config = {

    authApp: {

        path : "/auth/signin",

        params : {
            username : "andi@gmail.com",
            password : "andi123",
        }

    },

    allProduct: {

        path : "/products",

        params : {
            headers : {
                'Authorization' : `Bearer ${token.gantiKaos}`
            }
        }

    },

}

export default config

import token from "./token"

const config = {

    authApp: {

        path : "/auth/signin",

        endpoint : {
            username : "andi@gmail.com",
            password : "andi123",
        }

    },

    allProduct: {

        path : "/products",

        endpoint : {
            headers : {
                'Authorization' : `Bearer ${token.gantiKaos}`
            }
        }

    },

}

export default config
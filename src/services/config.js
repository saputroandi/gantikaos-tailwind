
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
                'Authorization' : `Bearer `
            }
        }

    },

}

export default config
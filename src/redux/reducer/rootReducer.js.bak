
const globalState = {
    product : {
        product_id : 1,
        name       : 'nama produk',
        slug       : 'slug produk',
        description: 'deskripsi produk',
        price      : 10000000,
        is_default : 1,
    },
    order : {},
}

//reducer 
const rootReducer = (state = globalState, action) => {
    switch (action.type) {
        case 'GET_PRODUCT_DETAIL' : {
            return state
        }
        case 'MAKE_ORDER' : {
            console.log(action.val)
        }
    }
    return state
}

export default rootReducer
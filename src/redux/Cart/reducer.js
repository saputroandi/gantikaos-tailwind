import { ADD_TO_CART } from './constants'

const initialState = []

const reducer = (state = initialState, action) => {

    switch(action.type) {
        
        case ADD_TO_CART:

            if (state.find(item => item.product_id === action.item.product_id)) {
                return state.map(item => ({
                    product_id: item.product_id === action.item.product_id ? action.item.product_id : action.item.product_id,
                    product: item.product === action.item.product ? action.item.product : action.item.product,
                    qty: item.product_id === action.item.product_id ? action.item.qty : action.item.qty,
                    color: item.product_id === action.item.product_id ? action.item.color : action.item.color,
                    size: item.product_id === action.item.product_id ? action.item.size : action.item.size,
                }))
            } else {
                return [
                    ...state,
                    {...action.item}
                ]
            }

        default:
            return state

    }

}

export default reducer
import { ADD_TO_CART } from './constants'

export const setAddToCart = (item) => {
    console.log(item)

    return {
        type: ADD_TO_CART,
        item
    }

}
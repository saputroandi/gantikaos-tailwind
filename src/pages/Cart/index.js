import React from "react"
import { arrayOf, string, shape, oneOfType, number, func } from 'prop-types'

const Cart = ({items}) => {

    return <div></div>

}

Cart.propTypes = {
    items: arrayOf(shape({
        product_id: string.isRequired,
        qty       : string.isRequired,
        color     : string.isRequired,
        size      : string.isRequired,
    })),
}

export default Cart
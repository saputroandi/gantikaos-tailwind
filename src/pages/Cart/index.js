import React from "react"
import { useSelector } from "react-redux"
import FormatRupiah from "../../services/formatRupiah"
import "./index.css"
// import { arrayOf, string, shape, oneOfType, number, func } from 'prop-types'

const Cart = ({items}) => {

    let productInCart = useSelector(state => state.cart)

    let totalPrice = 0

    console.log(productInCart)

    const checkProductInsideCart = () => {
        if(productInCart.length === 0){
            return <p>Keranjang Anda Kosong</p>
        }
    }

    return (
    <React.Fragment>
        <div className="cart-div z-10 lg:z-20 h-full w-full lg:w-1/3 fixed overflow-auto">
            <div className="h-2/3 w-full bg-gray-200 overflow-auto">
            {
                checkProductInsideCart()
            }
            {/* start one product cart */}
            {
                productInCart.map((val) => {

                    totalPrice += (val.price*val.qty)
                    let { photo } = val.product.photos.find( photo => photo.is_default === true )

                    return (

                            <div>
                                <div className="grid grid-cols-2 grid-flow-col align-middle items-center gap-1 p-2">
                                    <div>
                                        <img className="w-150 h-150" alt="gambar" src={`https://gantikaos.fakta.website/api/v1/product-galleries/image/${ photo }`} />
                                    </div>
                                    <div className="grid gap-y-3">
                                        <div className="text-xl">
                                            {val.product.name}
                                        </div>
                                        <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                                            <p className="text-xs">{FormatRupiah(val.product.price)}/pcs</p>
                                            <p className="">{FormatRupiah((val.product.price*val.qty))}</p>
                                        </div>
                                        <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                                            <label className="font-light">Jumlah :</label>
                                            <div className="border-black border-2 rounded justify-end">
                                                <div className="grid grid-flow-col gap-x-2 justify-items-center mx-1">
                                                    <button className="btn-decrement  focus:outline-none">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                                    </button>
                                                    <span className=" text-md">{val.qty}</span>
                                                    <button className="btn-increment  focus:outline-none">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid place-content-end">
                                            <button className="px-1 rounded border-black border-2 focus:outline-none">Hapus</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid justify-center font-extralight text-sm bg-gray-100">
                                    <p>Estimasi pengerjaan 2-3 hari kerja</p>
                                    <p>Estimasi pengiriman 2-4 hari kerja</p>
                                </div>
                            </div>

                    )

                })
            }
            </div>  
            {/* end one product cart */}

            {/* Sub-Total */}
            <div className="h-60 lg:h-56 w-full bg-gray-300 overflow-auto">
                <div className="grid grid-flow-col place-items-center py-1">
                    <label>Total :</label>
                    <p className="">{FormatRupiah(totalPrice)}</p>
                </div>
                <div className="grid place-items-center py-2">
                    <p>Konfirmasi Pemesanan</p>
                </div>
                <div className="mx-2 py-1">
                    <label className="grid grid-flow-col mx-3">
                        <p>No WhatsApp :</p>
                        <input name="no_whatsapp" type="text" className="w-full text-center rounded focus:outline-none" />
                    </label>
                    <div className="m-3">
                        <button className="w-full rounded bg-gray-400 focus:outline-none">Checkout</button>
                    </div>
                </div>
            </div>
            {/* End Sub-Total */}

        </div>
    </React.Fragment>
    
    )

}

// Cart.propTypes = {
//     items: arrayOf(shape({
//         product_id: string.isRequired,
//         qty       : string.isRequired,
//         color     : string.isRequired,
//         size      : string.isRequired,
//     })),
// }

export default Cart
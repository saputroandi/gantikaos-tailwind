import React from "react"
import FormatRupiah from "../../services/formatRupiah"
// import { arrayOf, string, shape, oneOfType, number, func } from 'prop-types'

const Cart = ({items}) => {

    const productInCart = [
        {
            name : "Nike",
            img  : "https://images.unsplash.com/photo-1606775524496-8ffd63ad2a98?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=465&q=80",
            price: 120000,
            qty  : 2,
            color: "White",
            size : "L"
        },
        {
            name : "Adidas",
            img  : "https://images.unsplash.com/photo-1613447326896-c7b8a0ab9b43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            price: 150000,
            qty  : 1,
            color: "White",
            size : "XL"
        },
        {
            name : "Sketchers",
            img  : "https://images.unsplash.com/photo-1562873154-e2ffd53d56c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80",
            price: 250000,
            qty  : 3,
            color: "Black",
            size : "L"
        },
        {
            name : "Onitsuka Tiger",
            img  : "https://images.unsplash.com/photo-1576140801354-5afa28ca253f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHQlMjBzaGlydHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 200000,
            qty  : 1,
            color: "White",
            size : "XL"
        },
        {
            name : "Rebook",
            img  : "https://images.unsplash.com/photo-1592790807458-d7980c141d90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHQlMjBzaGlydHxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            price: 300000,
            qty  : 4,
            color: "Navy",
            size : "XL"
        },
    ]

    return (
    <React.Fragment>
        <div className="z-10 lg:z-20 h-full w-full lg:w-1/3 fixed overflow-auto">
            <div className="h-2/3 w-full bg-gray-200 overflow-auto">
            {/* start one product cart */}
            {
                productInCart.map((val) => {

                    return (

                            <div>
                                <div className="grid grid-cols-2 grid-flow-col align-middle items-center gap-4 p-4">
                                    <div>
                                        <img className="w-150 h-150" alt="gambar" src={val.img} />
                                    </div>
                                    <div className="grid gap-y-3">
                                        <div className="text-xl">
                                            {val.name}
                                        </div>
                                        <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                                            <p>{FormatRupiah(val.price)}</p>
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
                                        <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                                            <label className="font-light">Size :</label>
                                            <select className="w-16 h-7 px-1 rounded border-2 border-black focus:outline-none shadow-md">
                                                <option value="S">S</option>
                                                <option value="M">M</option>
                                                <option value="L">L</option>
                                                <option value="XL">XL</option>
                                            </select>
                                        </div>
                                        <div>
                                            <div className="grid grid-flow-col place-items-center justify-between">
                                                <label className="font-light">Warna:</label>
                                                <div className="grid grid-flow-col gap-x-1 justify-items-center">
                                                    <button value="Navy" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-blue-900" />
                                                    <button value="White" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-white" />
                                                    <button value="Black" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-black" />
                                                </div>
                                            </div>
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
                    <p className="">{FormatRupiah(500000)}</p>
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
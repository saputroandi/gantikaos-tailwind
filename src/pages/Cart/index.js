import React from "react"
// import { arrayOf, string, shape, oneOfType, number, func } from 'prop-types'

const Cart = ({items}) => {

    return (
    <React.Fragment>
        <div className="z-10 h-full w-full lg:w-1/3 fixed bg-gray-400 overflow-auto">
            {/* start one product cart */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 p-6 bg-red-300">
                <div>
                    <img className="w-150 h-150" alt="gambar" src="https://images.unsplash.com/photo-1544327415-cfb77383dabc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="grid gap-y-2">
                    <div className="text-xl">
                        Adidas
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Jumlah :</label>
                        <div className="border-black border-2 rounded justify-end">
                            <div className="grid grid-flow-col gap-x-2 justify-items-center mx-1">
                                <button className="btn-decrement  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                </button>
                                <span className=" text-md">1</span>
                                <button className="btn-increment  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Size :</label>
                        <select className="w-16 h-7 px-1 rounded border-2 border-black focus:outline-none shadow-md">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div>
                        <div className="grid grid-flow-col place-items-center justify-between">
                            <label className="">Warna:</label>
                            <div className="grid grid-flow-col gap-x-1 justify-items-center">
                                <button value="Navy" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-blue-900" />
                                <button value="White" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-white" />
                                <button value="Black" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end one product cart */}
            {/* start one product cart */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 p-6 bg-yellow-300">
                <div>
                    <img className="w-150 h-150" alt="gambar" src="https://images.unsplash.com/photo-1544327415-cfb77383dabc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="grid gap-y-2">
                    <div className="text-xl">
                        Nike
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Jumlah :</label>
                        <div className="border-black border-2 rounded justify-end">
                            <div className="grid grid-flow-col gap-x-2 justify-items-center mx-1">
                                <button className="btn-decrement  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                </button>
                                <span className=" text-md">1</span>
                                <button className="btn-increment  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Size :</label>
                        <select className="w-16 h-7 px-1 rounded border-2 border-black focus:outline-none shadow-md">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div>
                        <div className="grid grid-flow-col place-items-center justify-between">
                            <label className="">Warna:</label>
                            <div className="grid grid-flow-col gap-x-1 justify-items-center">
                                <button value="Navy" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-blue-900" />
                                <button value="White" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-white" />
                                <button value="Black" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end one product cart */}
            {/* start one product cart */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 p-6 bg-green-300">
                <div>
                    <img className="w-150 h-150" alt="gambar" src="https://images.unsplash.com/photo-1544327415-cfb77383dabc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="grid gap-y-2">
                    <div className="text-xl">
                        Onitsuka Tiger
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Jumlah :</label>
                        <div className="border-black border-2 rounded justify-end">
                            <div className="grid grid-flow-col gap-x-2 justify-items-center mx-1">
                                <button className="btn-decrement  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                </button>
                                <span className=" text-md">1</span>
                                <button className="btn-increment  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Size :</label>
                        <select className="w-16 h-7 px-1 rounded border-2 border-black focus:outline-none shadow-md">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div>
                        <div className="grid grid-flow-col place-items-center justify-between">
                            <label className="">Warna:</label>
                            <div className="grid grid-flow-col gap-x-1 justify-items-center">
                                <button value="Navy" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-blue-900" />
                                <button value="White" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-white" />
                                <button value="Black" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end one product cart */}
            {/* start one product cart */}
            <div className="grid grid-cols-2 grid-flow-col gap-4 p-6 bg-blue-300">
                <div>
                    <img className="w-150 h-150" alt="gambar" src="https://images.unsplash.com/photo-1544327415-cfb77383dabc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="grid gap-y-2">
                    <div className="text-xl">
                        Converse
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Jumlah :</label>
                        <div className="border-black border-2 rounded justify-end">
                            <div className="grid grid-flow-col gap-x-2 justify-items-center mx-1">
                                <button className="btn-decrement  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                </button>
                                <span className=" text-md">1</span>
                                <button className="btn-increment  focus:outline-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-flow-col gap-2 place-items-center justify-between">
                        <label className="">Size :</label>
                        <select className="w-16 h-7 px-1 rounded border-2 border-black focus:outline-none shadow-md">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div>
                        <div className="grid grid-flow-col place-items-center justify-between">
                            <label className="">Warna:</label>
                            <div className="grid grid-flow-col gap-x-1 justify-items-center">
                                <button value="Navy" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-blue-900" />
                                <button value="White" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-white" />
                                <button value="Black" className="h-7 w-7 shadow-md rounded focus:shadow-none bg-black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end one product cart */}
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
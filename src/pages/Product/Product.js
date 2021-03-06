import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import { setAddToCart } from '../../redux/Cart/actions'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Product = () => {

    const initialItem = {
        product_id: 1,
        qty: 1,
        size: 'S',
        color: 'White',
    }

    const [slide, setSlide] = useState(0)
    const [item, setItem] = useState(initialItem)
    const handleChange = (selector, value) => setItem({...item, [selector]: value})

    let dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className="container my-8 mx-auto">

                {/* Product */}
                <div className="grid grid-cols-2 gap-14 items-center">
                    
                    {/* Product Image */}
                    <div className="grid grid-cols-4 gap-1">
                        <div className="grid gap-y-1">
                            <div onClick={() => setSlide(0)} className="h-150 w-150">
                                <img alt="example" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                            </div>
                            <div onClick={() => setSlide(1)} className="h-150 w-150">
                                <img alt="example" src="https://images.unsplash.com/photo-1600185652960-c9d8869d015c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                            </div>
                            <div onClick={() => setSlide(2)} className="h-150 w-150">
                                <img alt="example" src="https://images.unsplash.com/photo-1518894781321-630e638d0742?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                            </div>
                        </div>
                        <div className="h-450 w-450 col-start-2 col-end-5 place-self-center">
                            <Carousel selectedItem={slide} showStatus={false} showThumbs={false} showArrows={false} showIndicators={false} axis="vertical">
                                <div>
                                    <img alt="example-1" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div>
                                    <img alt="example-2" src="https://images.unsplash.com/photo-1600185652960-c9d8869d015c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                                <div>
                                    <img alt="example-3" src="https://images.unsplash.com/photo-1518894781321-630e638d0742?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    {/* Order Button */}
                    <div className="grid grid-rows-1 gap-y-2">
                        <h3 className="text-gray-700 uppercase text-6xl">Sepatu Nike</h3>
                        <div className="flex items-end gap-x-2">
                            <span className="text-gray-700 text-lg">Rp. 500.000,-</span>
                            <span className="text-gray-500 text-sm line-through">Rp. 1.000.000,-</span>
                        </div>
                        <div>
                            <label className="text-gray-700 text-lg">Jumlah:</label>
                            <div className="flex gap-x-2 justify-items-center">
                                <button onClick={() => setItem(item.qty < 2 ? {...item, qty: 1} : {...item, qty: item.qty - 1})} className="btn-decrement text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                                </button>
                                <span className="text-gray-700 text-xl">{item.qty}</span>
                                <button onClick={() => setItem({...item, qty: item.qty + 1})} className="btn-increment text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 text-lg">Size:</label>
                            <select className="w-24 p-2 focus:outline-none" onChange={(e) => handleChange('size', e.target.value)}>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-gray-700 text-lg" htmlFor="count">Warna:</label>
                            <div className="flex gap-x-1 justify-items-center">
                                <button onClick={(e) => handleChange('color', e.target.value)} value="Navy" className="h-7 w-7 shadow-md focus:shadow-none bg-blue-900" />
                                <button onClick={(e) => handleChange('color', e.target.value)} value="White" className="h-7 w-7 shadow-md focus:shadow-none bg-white" />
                                <button onClick={(e) => handleChange('color', e.target.value)} value="Black" className="h-7 w-7 shadow-md focus:shadow-none bg-black" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 w-56 gap-y-2 mt-10">
                            <div className="grid grid-cols-5 justify-items-center gap-x-1">
                                <button className="col-start-1 col-end-5 w-full rounded shadow-md bg-black text-white text-xs focus:outline-none">Tambah Ke Wishlist</button>
                                <button className="flex justify-center w-full rounded shadow text-gray-600 border hover:bg-gray-200 focus:outline-none">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div>
                                <button onClick={() => dispatch(setAddToCart(item))} className="w-full py-3 rounded shadow-md bg-black text-white focus:outline-none">Beli Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details Product */}
            <div className="container my-8 mx-auto">
                <div className="w-full" style={{borderBottom: '1px solid #eaeaea'}}>
                    <ul className="flex cursor-pointer space-x-3">
                        <li className="py-2 px-6">Deskripsi</li>
                        <li className="py-2 px-6">Kebijakan</li>
                        <li className="py-2 px-6">Review</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Product
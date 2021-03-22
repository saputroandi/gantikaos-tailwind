import React from "react"
import { rootPath } from "../../services/index"

const ProductCard = (props) => {
    return (
        <div className="p-4 w-full max-w-sm mx-auto overflow-hidden border-2 border-white hover:border-black">
            <div className="flex items-end justify-end h-56 bg-center bg-cover"  style={{backgroundImage :  `url(${rootPath}/product-galleries/image/${props.data.photos[0].photo})` }}>
                <button onClick={(e) => e.preventDefault()} className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4 focus:outline-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                <button onClick={(e) => e.preventDefault()} className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4 focus:outline-none">
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </button>
            </div>
                <div className="px-4 py-3 bg-gray-100">
                    <h3 className="text-gray-700 uppercase">{props.data.name}</h3>
                    <hr></hr>
                    <span className="text-gray-500 mt-2 flex justify-end">{props.data.price}</span>
                </div>
        </div>
    )
}

export default ProductCard
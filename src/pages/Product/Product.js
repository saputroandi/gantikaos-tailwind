import React from "react";

export default function Product() {

    return (
        <React.Fragment>
            <div className="container my-8 mx-auto">
                {/* product */}
                <div className="grid grid-cols-2 gap-10 items-center">
                    {/* product image */}
                    <div>
                        <img className="h-full w-full object-cover max-w-lg mx-auto" src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Nike Air" />
                    </div>
                    {/* order button */}
                    <div className="grid grid-rows-1 gap-y-2">
                        <h3 className="text-gray-700 uppercase text-lg">Nike Air</h3>
                        <span className="text-gray-500">Rp. 1.000.000,-</span>
                        <div>
                            <label className="text-gray-700 text-sm" htmlFor="count">Jumlah:</label>
                            <div className="flex gap-x-1 justify-items-center">
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </button>
                                <span className="text-gray-700 text-lg">20</span>
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-700 text-sm" htmlFor="count">Size:</label>
                            <div className="flex justify-items-center">
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </button>
                                <span className="text-gray-700 text-lg mx-2">L</span>
                                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-gray-700 text-sm" htmlFor="count">Warna:</label>
                            <div className="flex gap-x-1 justify-items-center">
                                <button className="h-5 w-5 bg-blue-600" />
                                <button className="h-5 w-5 bg-yellow-600" />
                                <button className="h-5 w-5 bg-pink-600" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 w-56 gap-y-2">
                            <div className="grid grid-cols-5 justify-items-center gap-x-1">
                                <button className="col-start-1 col-end-5 w-full bg-black text-white text-xs focus:outline-none">Tambah Ke Wishlist</button>
                                <button className="flex justify-center w-full text-gray-600 border hover:bg-gray-200 focus:outline-none">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div>
                                <button className="w-full py-3 bg-black text-white focus:outline-none">Beli Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* details product */}
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
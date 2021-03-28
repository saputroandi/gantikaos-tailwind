import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/index"
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import API, { GET } from "../../services";
import { checkToken } from "../../services/token";
import ShopName from "../../components/ShopName";
import SearchBox from "../../components/SearchBox";
import TopBarMenu from "../../components/TopBarMenu";

export default function Home(){

    const [allProduct, setAllproduct] = useState([])

    const handleCheckToken = async () => {

        let token  = await checkToken()
        let values = await GET("/products", token.localToken, "").then((val) => {
            return setAllproduct(val.data.rows)
        })

        return values
    }

    useEffect(() => {
    
        handleCheckToken()

    }, [])

    
    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className="sticky z-10 lg:z-0 lg:static top-0 bg-black">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-1 py-6">
                    <ShopName className="grid place-items-center lg:content-center text-white uppercase" />
                    <SearchBox />
                    <TopBarMenu />
                </div>
            </nav>
            {/* end Navbar */}

            {/* Carousel */}
            <div className="max-w-screen-2xl max-h-80 m-auto">
                <Carousel autoPlay infiniteLoop interval={2500} showStatus={false} showThumbs={false} centerMode={true} stopOnHover={true}>
                    <div>
                        <img className="w-full h-40 lg:h-80" src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                    </div>
                    <div>
                        <img className="w-full h-40 lg:h-80" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"/>
                    </div>
                    <div>
                        <img className="w-full h-40 lg:h-80" src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                    </div>
                </Carousel>
            </div>
            {/* End Carousel */}

            {/* Product */}
            <main className="mb-16 mt-8 lg:my-8">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 ">
                        {
                            allProduct.map((val) => {
                                return (
                                <Link key={val.id} to={`/detail/${val.id}`}>
                                    <ProductCard key={val.id} data={val} />
                                </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
            {/* end product */}

            {/* mobile bottom navigation */}
            <div className="fixed w-full py-2 bottom-0 lg:hidden bg-black">
                <div className=" grid grid-cols-3 justify-items-center">
                    <button className="focus:outline-none p-1">
                        <div className="flex justify-center bg-black text-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </div>
                        <div>
                            <p className="font-light text-xs text-white focus:outline-none">Menu</p>
                        </div>
                    </button>
                    <button className="focus:outline-none p-1">
                        <div className="flex justify-center bg-black text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <div>
                            <p className="font-light text-xs text-white focus:outline-none">Wishlist</p>
                        </div>
                    </button>
                    <button className="focus:outline-none p-1">
                        <div className="flex justify-center bg-black text-white">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <div>
                            <p className="font-light text-xs text-white focus:outline-none">Cart</p>
                        </div>
                    </button>
                </div>
            </div>
            {/* end mobile bottom navigation */}

        </React.Fragment>
    )
}
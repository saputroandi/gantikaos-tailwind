import React, { useState } from "react";

//carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home(){

    let image = 'url("https://images.unsplash.com/photo-1607307740691-3bac0511e16a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=460&q=80")'

    let image1 = 'url("https://images.unsplash.com/photo-1609016683866-029bca027853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=477&q=80")'

    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className="static top-0 hidden lg:block bg-black">
                <div className="flex py-3 mx-4">
                    <div className=" flex w-full place-content-between">
                        <div className="p-2 my-2 text-white uppercase">
                            Ganti Kaos
                        </div>
                        <div className="flex flex-row">
                            <div className=" lg:mr-4">
                                <input type="text" placeholder="Search..." className=" border-gray-300 mt-2 h-10 px-5 pr-16 text-sm focus:outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className="py-2 block mt-0">
                        <div className=" flex flex-col lg:flex-row place-content-between  w-40 ml-8 mr-14 ">
                            <div className="py-2 lg:py-0">
                                <button className="mx-1 p-2 text-white uppercase">Menu</button>
                            </div>
                            <div className="py-2 lg:py-0">
                                <button className="mx-1 p-2 text-white uppercase">Profile</button>
                            </div>
                            <div className="py-2 lg:py-0">
                                <button className="mx-1 p-2 text-white uppercase">Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* end Navbar */}

            {/* Carousel */}
            <div className="max-w-screen-2xl max-h-80 m-auto">
                <Carousel autoPlay infiniteLoop interval={2500} showStatus={false} showThumbs={false}>
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
            <main className="mb-20 mt-8 lg:my-8">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 ">
                        <div className="p-4 w-full max-w-sm mx-auto overflow-hidden border-2 border-white hover:border-black">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage :  image}} onMouseOver={e => (e.currentTarget.style.backgroundImage = image1 )} onMouseOut={e => (e.currentTarget.style.backgroundImage = image )}>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4 focus:outline-none">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className=" py-3">
                                <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                <hr></hr>
                                <span className="text-gray-500 mt-2 flex justify-end">$123</span>
                            </div>
                        </div>
                        <div className="p-4 w-full max-w-sm mx-auto overflow-hidden border-2 border-white hover:border-black">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage :  image}} onMouseOver={e => (e.currentTarget.style.backgroundImage = image1 )} onMouseOut={e => (e.currentTarget.style.backgroundImage = image )}>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4 focus:outline-none">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className="px-5 py-3">
                                <h3 className="text-gray-700 uppercase">Old watch</h3>
                                <hr></hr>
                                <span className="text-gray-500 mt-2 flex justify-end">$95</span>
                            </div>
                        </div>
                        <div className="p-4 w-full max-w-sm mx-auto overflow-hidden border-2 border-white hover:border-black">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage :  image}} onMouseOver={e => (e.currentTarget.style.backgroundImage = image1 )} onMouseOut={e => (e.currentTarget.style.backgroundImage = image )}>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4 focus:outline-none">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className="px-5 py-3">
                                <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                <hr></hr>
                                <span className="text-gray-500 mt-2 flex justify-end">$125</span>
                            </div>
                        </div>
                        <div className="p-4 w-full max-w-sm mx-auto overflow-hidden border-2 border-white hover:border-black">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage :  image}} onMouseOver={e => (e.currentTarget.style.backgroundImage = image1 )} onMouseOut={e => (e.currentTarget.style.backgroundImage = image )}>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4 focus:outline-none">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                                <button className="p-2 rounded-full shadow-lg bg-black text-white mx-2 -mb-4">
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className="px-5 py-3">
                                <h3 className="text-gray-700 uppercase">fossil watch</h3>
                                <hr></hr>
                                <span className="text-gray-500 mt-2 flex justify-end">$180</span>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
                {/* end product */}

                {/* mobile bottom navigation */}
                <div className="fixed w-full py-2 bottom-0 lg:hidden bg-black">
                    <div className="flex flex-row justify-between px-6 mx-4">
                        <div className="flex-col">
                            <button className=" focus:outline-none focus:ring-1 focus:ring-blue-600 focus:opacity-100 focus:shadow-none p-1">
                                <div className="flex justify-center bg-black text-white">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                </div>
                                <div>
                                    <p className="font-light text-xs text-white">Menu</p>
                                </div>
                            </button>
                        </div>
                        <div className="flex-col">
                            <button className=" focus:outline-none focus:ring-1 focus:ring-blue-600 focus:opacity-100 focus:shadow-none p-1">
                                <div className="flex justify-center bg-black text-white">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                </div>
                                <div>
                                    <p className="font-light text-xs text-white">Profile</p>
                                </div>
                            </button>
                        </div>
                        <div className="flex-col">
                            <button className=" focus:outline-none focus:ring-1 focus:ring-blue-600 focus:opacity-100 focus:shadow-none p-1">
                                <div className="flex justify-center bg-black text-white">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </div>
                                <div>
                                    <p className="font-light text-xs text-white">Cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* end mobile bottom navigation */}

        </React.Fragment>
    )
}
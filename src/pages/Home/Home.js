import React, { useState } from "react";

//carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home(){
    const [menubar, setMenubar] = useState(false);


    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className="static bg-gradient-to-br from-blue-600 to-blue-400 top-0 hidden lg:block">
                <div className="flex py-3 mx-4">
                    <div className=" flex w-full place-content-between">
                        <div className="py-2 mt-2">
                            Ganti Kaos
                        </div>
                        <div className="flex flex-row">
                            <div className=" lg:mr-4">
                                <input type="text" placeholder="Search..." className="border-1 border-gray-300 bg-white mt-2 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
                            </div>
                        </div>
                    </div>
                    <div className={`py-2 block mt-0`}>
                        <div className=" flex flex-col lg:flex-row place-content-between  w-40 mx-6 ">
                            <div className="py-2 lg:py-0"><button className="mx-1 p-2 opacity-60 rounded-xl focus:outline-none hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:opacity-100">Menu</button></div>
                            <div className="py-2 lg:py-0"><button className="mx-1 p-2 opacity-60 rounded-xl focus:outline-none hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:opacity-100">Profile</button></div>
                            <div className="py-2 lg:py-0"><button className="mx-1 p-2 opacity-60 rounded-xl focus:outline-none hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:opacity-100">Cart</button></div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* end Navbar */}

            {/* Carousel */}
            <div className="w-full max-h-80 m-auto">
                <Carousel autoPlay infiniteLoop interval={2500} showStatus={false} showThumbs={false} centerMode={true}>
                    <div>
                        <img className="h-80" src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                    </div>
                    <div>
                        <img className="h-80" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"/>
                    </div>
                    <div>
                        <img className="h-80" src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"/>
                    </div>
                </Carousel>
            </div>
            {/* End Carousel */}

            {/* Product */}
            <main className="my-8">
                <div className="container mx-auto px-6">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")'}}>
                                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className="px-5 py-3">
                                <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                <span className="text-gray-500 mt-2">$123</span>
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=689&q=80")'}}>
                                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className="px-5 py-3">
                                <h3 className="text-gray-700 uppercase">Old watch</h3>
                                <span className="text-gray-500 mt-2">$95</span>
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")'}}>
                                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className="px-5 py-3">
                                <h3 className="text-gray-700 uppercase">Classic watch</h3>
                                <span className="text-gray-500 mt-2">$125</span>
                            </div>
                        </div>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")'}}>
                                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </button>
                            </div>
                            <div className="px-5 py-3">
                                <h3 className="text-gray-700 uppercase">fossil watch</h3>
                                <span className="text-gray-500 mt-2">$180</span>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
                {/* end product */}

                {/* mobile bottom navigation */}
                <div className="fixed w-full py-3 bg-gradient-to-br from-blue-600 to-blue-400 bottom-0 lg:hidden">
                    <div className="flex flex-row justify-between px-6 mx-4">
                        <div className="flex-col">
                            <button className="opacity-60 rounded-xl focus:outline-none hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:opacity-100 p-2">
                                <div className="flex justify-center">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div>
                                    <p>Menu</p>
                                </div>
                            </button>
                        </div>
                        <div className="flex-col">
                            <button className="opacity-60 rounded-xl focus:outline-none hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:opacity-100 p-2">
                                <div className="flex justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div>
                                    <p>Profile</p>
                                </div>
                            </button>
                        </div>
                        <div className="flex-col">
                            <button className="opacity-60 rounded-xl focus:outline-none hover:bg-blue-800 focus:ring-2 focus:ring-blue-600 focus:opacity-100 p-2">
                                <div className="flex justify-center">
                                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                </div>
                                <div>
                                    <p>Cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* end mobile bottom navigation */}

        </React.Fragment>
    )
}
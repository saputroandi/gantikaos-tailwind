import React from "react"

const NavBar = () => {
    return (
        <nav className="sticky z-10 lg:z-0 lg:static top-0 bg-black">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-1 py-6">
                <div className="grid place-items-center lg:content-center text-white uppercase">
                    Ganti Kaos
                </div>
                <div className="hidden col-start-4 lg:block">
                    <div className=" justify-items-center">
                        <input type="text" placeholder="Search..." className=" border-gray-300 h-10 w-full pl-2 text-sm focus:outline-none" />
                    </div>
                </div>
                <div className="hidden col-start-5 col-end-6 py-2 lg:block mt-0">
                    <div className="grid grid-cols-3 justify-items-center">
                        <button className=" text-white uppercase focus:outline-none">Menu</button>
                        <button className=" text-white uppercase focus:outline-none">Wishlist</button>
                        <button className=" text-white uppercase focus:outline-none">Cart</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
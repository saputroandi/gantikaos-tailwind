import React from "react"

const TopBarMenu = () => {
    return (

        <div className="hidden col-start-5 col-end-6 py-2 lg:block mt-0">
            <div className="grid grid-cols-3 justify-items-center">
                <button className=" text-white uppercase focus:outline-none">Menu</button>
                <button className=" text-white uppercase focus:outline-none">Wishlist</button>
                <button className=" text-white uppercase focus:outline-none">Cart</button>
            </div>
        </div>

    )
}

export default TopBarMenu
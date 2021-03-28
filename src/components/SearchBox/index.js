
import React from "react"

const SearchBox = () => {
    return (

        <div className="hidden col-start-4 lg:block">
            <div className=" justify-items-center">
                <input type="text" placeholder="Search..." className=" border-gray-300 h-10 w-full pl-2 text-sm focus:outline-none" />
            </div>
        </div>

    )
}

export default SearchBox
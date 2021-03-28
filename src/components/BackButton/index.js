import React from "react"
import { Link } from "react-router-dom"

const BackButton = (props) => {
    return (

        <Link to={"/"}>
            <button className="grid ml-3 text-xl text-white focus:outline-none  lg:hidden">Back</button>
        </Link>

    )
}

export default BackButton
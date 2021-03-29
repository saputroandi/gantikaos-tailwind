import React from "react"
import { Link } from "react-router-dom"

const BackButton = (props) => {
    return (

        <Link to={"/"}>
            <button className="flex content-center ml-3 text-sm text-white focus:outline-none lg:hidden">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                Back
            </button>
        </Link>

    )
}

export default BackButton
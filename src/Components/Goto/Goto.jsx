import React from 'react'
import { Link } from 'react-router-dom'

const Goto = () => {
    return (
        <div className="bg-gray-300 mx-[2%] md:mx-[10%] font-serif md:h-24 h-20 flex flex-row text-center items-center justify-center md:space-x-48 rounded-full">
            <h1 className='bg-white md:p-3 p-2 border-primary mx-2 md:mx-10 text-sm md:text-xl font-semibold text-yellow-800 rounded-full border-b-8 border-l-4'>
                Feel Seamless Bidding
            </h1>
            <Link to="/e-mandi">
                <button className='rounded-full md:text-xl text-sm  p-2 font-semibold border-red  md:border-r-8 md:border-t-8 bg-green md:p-3 m-2 hover:translate-x-4 border-r-4 border-t-8 hover:bg-orange-500 hover:border-gray-800 hover:text-white hover:transform-cpu shadow-md shadow-black hover:shadow-primary cursor-pointer'>
                    Go to E-Mandi
                </button>
            </Link>

        </div>
    )
}

export default Goto

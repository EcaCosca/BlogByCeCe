import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div>
            <div className="bg white h-screen flex flex-col justify-center items-center">
                <h1 className="lg:text-9xl md:text-7xl sm:text-5xl font-black mb-14">
                    CeCe's Blog
                </h1>
                <Link className='py-6 px-10 bg-yellow-500 rounded-full text-2xl hover:bg-yellow-300 transition duration-300 ease-in-out flex intems-center animate-bounce'>
                    My passion in writen form
                    {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> */}
                </Link>
            </div>
        </div>
    )
}

export default Hero

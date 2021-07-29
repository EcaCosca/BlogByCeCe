import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import Mailto from 'reactv16-mailto';


const Footer = () => {
    return (
        <nav 
					className='flex flex-col justify-around items-center h-46 bg-white text-red relative shadow-sm font-mono border-t-2'
					role='navigation'
				>
            <div className="flex flex-col justify-around items-center w-screen md:flex-row">
                <Link to='/' className='pl-8 hover:text-gray-500 font-bold'>
                    Ce Colonel
                </Link>
                
                    <div className="pr-9 flex flex-col">
                        <Link className="nav-btn" to='/'>Home</Link>
                        <Link className="nav-btn" to='/blog'>Blog</Link>
                        <Link className="nav-btn" to='/about'>About</Link>
                        <Link className="nav-btn" to='/journalist'>Journalist</Link>
                        <Link className="nav-btn" to='/contact'>Contact</Link>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        
                        <div className="flex flex-row justify-around items-center">
                            <a className="text-5xl p-4" href='https://www.linkedin.com/in/camilacolonel/' target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <Mailto email="camilacolonel@gmail.com" obfuscate={true}>
                                <FaMailBulk className="text-5xl hover:text-cyan-500"/>
                            </Mailto>
                        </div>
                    </div>
            </div>

                

        <div>
            <p><small>© 1994-{new Date().getFullYear()} Ce Colonel - All rigths reserved  |  <Link className="nav-btn text-red-800" to='/privacy'>Privacy Policy</Link>  |  <Link className="nav-btn text-red-800" to='/cookies'>Cookies Policy</Link></small></p>
        </div>
        </nav>
    )
}

export default Footer

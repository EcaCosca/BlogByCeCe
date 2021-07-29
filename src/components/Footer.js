import React from 'react'
import { Link } from 'react-router-dom'

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
                        <h2 className="font-mono font-bold pl-8">Contact me!</h2>
                        <Link href='https://www.linkedin.com/in/openers-closers-53940147/' target="_blank" aria-label="LinkedIn"><FaLinkedin /></Link>
                    </div>
            </div>

                

        <div>
            <p><small>© 1994-{new Date().getFullYear()} Ce Colonel - All rigths reserved  |  Privacy Policy  |  Cookies Policy</small></p>
        </div>
        </nav>
    )
}

export default Footer

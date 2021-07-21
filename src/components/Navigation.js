import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navegation = () => {
    return (

        // BOOTSTRAP NAV MODEL 
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="/">Camila Colonel</Link>
                
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav ml-auto">
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" to="/create">Create Note</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" to="/user">Create User</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

        <nav>
            <Link to='/' className='pl-8'>
                EGG
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
							<svg 
								className="w-6 h-6"
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24" 
								xmlns="http://www.w3.org/2000/svg"
							>
								<path 
									strokeLinecap="round" 
									strokeLinejoin="round" 
									strokeWidth={2} 
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
            </div>
						<div className="pr-9 md:block hidden">
							<Link className="p-4" to='/'>Home</Link>
							<Link className="p-4" to='/menu'>Menu</Link>
							<Link className="p-4" to='/about'>About</Link>
							<Link className="p-4" to='/content'>Content</Link>
						</div>
        </nav>

    )
}

export default Navegation;

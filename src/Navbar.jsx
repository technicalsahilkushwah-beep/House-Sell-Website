import React from 'react'
import Navbar2 from './Navbar2'
import Navbar3 from './Navbar3'

const Navbar = () => {
    return (
        <>
            <header>
                <div className='bg-gradient-to-r brightness-110  hue-rotate-15 from-[#0d0a98] to-[#0991f6] py-4'>
                    <nav className='flex items-center justify-center gap-5 text-white text-base lg:justify-end lg:px-20'>
                        <h2 className='hidden md:flex md:text-base lg:text-base lg:flex'>Friday,January 23 | 12:23</h2>
                        <a href="#" className='sm:text-base md:text-base lg:text-base'>Contactus</a>
                        <a href="#" className='sm:text-base md:text-base lg:text-base'>Gallery</a>
                        <a href="#" className='sm:text-base md:text-base lg:text-base'>Login</a>
                        <a href="#"><i className='fab fa-facebook-f'></i></a>
                        <a href="#"><i className='fab fa-instagram'></i></a>
                        <a href="#"><i className='fab fa-x-twitter'></i></a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
import React from 'react'

const Navbar2 = () => {
    return (
        <header className='bg-white px-4 py-3 border-b border-gray-300 md:flex md:justify-center lg:justify-center'>

            <nav className='flex flex-wrap gap-6 font-medium items-center text-sm'>
                <a href="#" className='nav'><i className='fa fa-home '></i>Home</a>
                <a href="#" className='nav'><i className='fa fa-user'></i>About</a>
                <a href="#" className='nav'><i className='fa fa-users'></i>Allote corner</a>
                <a href="#" className='nav'><i className='fa fa-user'></i>Employe Corner</a>
                <a href="#" className='nav'><i className='fa fa-users'></i>Citezen Corner</a>
                <a href="#" className='nav'><i className='fa fa-road-circle-check'></i>Citezen Corner</a>
                <a href="#" className='nav'><i className='fa fa-users'></i>Architest</a>
                <a href="#" className='nav'>Carrers</a>
            </nav>
        </header>
    )
}

export default Navbar2
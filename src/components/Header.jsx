import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    const [isNavVisible, setIsNavVisible] = useState(true);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className='flex flex-col md:flex-row items-center justify-between px-4 h-14 text-center shadow-2xl bg-[#4B0082] mb-2 text-white'>
            <div className='text-3xl font-bold'>
                <Link to={'/'}>Hotelians</Link>
            </div>
            <div className='text-xl '>
                <Link to={'/hotels'} className='mx-2 hover:scale-105 hover:text-slate-400'>Top-hotels</Link>
                <Link to={'/about'} className='mx-2 hover:scale-105 hover:text-slate-400'>About</Link>
                <Link to={'/contact'} className='mx-2 hover:scale-105 hover:text-slate-400'>Contact</Link>

                {/* <button onClick={toggleNav}>Toggle</button> */}
            </div>
        </header>
    )
}

export default Header;
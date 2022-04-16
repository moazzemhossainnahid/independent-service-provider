import React, { useState } from 'react';
import './Header.css';
import Globe from '@iconscout/react-unicons/icons/uil-globe';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

import Bar from '@iconscout/react-unicons/icons/uil-bars';
import Close from '@iconscout/react-unicons/icons/uil-arrow-down-left';
 
const Header = () => {
    const navigate = useNavigate();

    let Links = [
        {name: 'HOME', to:'/'},
        {name: 'SERVICES', to:'/services'},
        {name: 'BLOGS', to:'/blogs'},
        {name: 'CONTACT', to:'/contact'},
        {name: 'ABOUT', to:'/about'},
    ];

    let [open, setOpen] = useState(false);
    return (
        <nav className='shadow-md w-full fixed top-0 left-0 text-left z-[99]'>
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="font-bold text-3xl cursor-pointer flex items-center text-red-700">
                    <span className="px-2 md:px-1"><Globe size='2rem'/></span>
                    City Travel
                </div>
                <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    {
                        open ?  <Close/> : <Bar/>
                    }
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0 md:opacity-100'}`}>
                    {
                        Links.map(link => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'><Link className='text-gray-800 hover:text-gray-500 duration-300' to={link.to}>{link.name}</Link></li>
                        ))
                    }
                    <div className="" onClick={() => navigate('/signin')}><Button>SignIn</Button></div>
                    
                </ul>
            </div>
        </nav>
    );
};

export default Header;
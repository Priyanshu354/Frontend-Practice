import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleDashboardClick = () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            navigate('/dashboard');
        }
    };

    return (
        <nav className='w-full flex justify-end p-6 space-x-4'>
            <button
                onClick={handleDashboardClick}
                className='text-black hover:text-blue-500 font-semibold'
            >
                Dashboard
            </button>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-semibold" : "text-black"
                }
            >
                Home
            </NavLink>
        </nav>
    );
};

export default Navbar;

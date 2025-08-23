import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-full p-6 flex gap-10 justify-end'>
        <NavLink to="/about" className="p-4 border-2 border-black text-md font-semibold" > About </NavLink>
        <NavLink to="/dashboard" className="p-4 border-2 border-black text-md font-semibold" > Dashboard </NavLink>
    </div>
  )
}

export default Navbar
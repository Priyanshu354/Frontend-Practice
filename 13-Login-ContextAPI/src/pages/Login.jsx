import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleInput = (e) => {
        const {name, value} = e.target;

        if(!name || !value) return;

        const newData = {...user};
        newData[name] = value;
        console.log(newData);
        setUser(newData);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        login(user.username, user.password);
        navigate('/dashboard');
    }

  return (
    <form className='w-full h-full p-6'>
        <h1 className='text-3xl font bold text-center'> Login Form </h1>
        <div className='flex flex-col'>
            <label htmlFor="password">User Name</label>
            <input type="text" id='username'
            name='username' value={user.username}
            onChange={handleInput} placeholder='Enter User Name' className='p-4 text-lg'/>
        </div>

        <div className='flex flex-col'>
            <label htmlFor="password">password</label>
            <input type="text" id='password'
            name='password' value={user.password}
            onChange={handleInput} placeholder='Enter Password' className='p-4 text-lg'/>
        </div>

        <button onClick={handleSubmit}
        className='rounded bg-blue-500 text-white font-semibold p-4 self-center cursor-pointer' > Login </button>
    </form>
  )
}

export default Login
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {
    const {logout} = useContext(AuthContext);
  return (
    <div className='flex flex-col gap-10 justify-center'>
        <h1>You are Logged In Dashboard</h1>
        <button onClick={() => logout()}
        className='rounded bg-red-700 text-white font-semibold p-4 self-center cursor-pointer' > LogOut </button>
    </div>
  )
}

export default Dashboard
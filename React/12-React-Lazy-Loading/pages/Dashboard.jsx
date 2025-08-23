import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full h-full flex'>
        <div className=' flex gap-10 p-6 flex-col'>
            <NavLink to="/dashboard/profile" className="p-4 border-2 border-black text-md font-semibold w-30 text-center" > profile </NavLink>
            <NavLink to="/dashboard/setting" className="p-4 border-2 border-black text-md font-semibold w-30 text-center" > setting </NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Dashboard
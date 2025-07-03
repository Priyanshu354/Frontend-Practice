import React from 'react'
import { useState } from 'react'

const TooltipRev = () => {
    const [active , setActive] = useState(false);

  return (
    <div className='w-full h-full flex justify-center items-center flex-col p-10'>
        <button className='px-4 py-2 rounded-md text-white bg-blue-500'
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        >
            ToolTip
        </button>

        {
            active && <p className=' bg-black p-4 rounded-md text-white mt-5'> Your will be free After this. </p>
        }
    </div>
  )
}

export default TooltipRev
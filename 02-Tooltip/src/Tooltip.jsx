import React, { useState } from 'react'

const Tooltip = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='w-full h-screen bg-black'>
      <h1 className='text-4xl font-semibold text-white text-center p-2'>ToolTip</h1>
      
      <div 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className='flex justify-center items-center mt-20'
      >
        <div className="relative">
          <button className='bg-blue-500 rounded-sm p-4 text-md text-white cursor-pointer font-semibold'>
            Alert
          </button>
          {show && (
            <div className='absolute bg-white text-black p-4 rounded shadow left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap z-10'>
              If you click, then your device will be hacked.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Tooltip

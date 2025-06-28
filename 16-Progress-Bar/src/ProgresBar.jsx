import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ProgresBar = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
    const id = setInterval(() => {
        setValue((prev) => {
            if (prev >= 100) {
                clearInterval(id);
                return prev;
            }
            return prev + 1;
        });
    }, 100);

    return () => clearInterval(id);
}, []);

  return (
    <div className='w-full h-full p-6 flex justify-center items-center'>
        <div className='relative w-[300px] h-8 bg-gray-300 rounded-2xl'>
            <span className={`absolute top-0 left-0 text-center bg-green-400 h-8 rounded-2xl z-50 flex justify-center items-center`}
            style={{ width: `${value}%` }} >{value}%</span>
        </div>
    </div>
  )
}

export default ProgresBar
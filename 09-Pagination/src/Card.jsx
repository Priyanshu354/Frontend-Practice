import React from 'react'

const Card = ({ thumbnail , title, id }) => {
  return (
    <div 
    className='flex flex-col justify-center items-center shadow border-2 gap-2 w-[250px] h-[350px]'>
        <div>
            <img src={thumbnail} alt={title} className=' object-cover w-20 h-30' />
        </div>
        <h1 className='text-md font-semibold'>{title}</h1>
    </div>
  )
}

export default Card
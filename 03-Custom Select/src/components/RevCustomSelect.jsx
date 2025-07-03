import React, { useState } from 'react'

const RevCustomSelect = () => {
    const [selected, setSelected] = useState("Select Country");
    const [isOpen, setIsOpen] = useState(false);
    const [CountryData] = useState([
        "India",
        "Nepal",
        "Australia",
        "London",
        "Sri Lanka",
    ]);

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='relative w-[200px]'>
                <div 
                    onClick={() => setIsOpen(prev => !prev)}
                    className='px-4 py-2 bg-white text-black border-2 border-black cursor-pointer text-center'
                >
                    {selected}
                </div>
                <div
                    className={`absolute top-full flex flex-col w-full 
                        transition-opacity duration-300 ease-in-out
                        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                    `}
                >
                    {CountryData.map((country, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setSelected(country);
                                setIsOpen(false);
                            }}
                            className='px-4 py-2 bg-white text-black border-2 border-black text-center hover:bg-gray-100 cursor-pointer transition-colors duration-200'
                        >
                            {country}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RevCustomSelect

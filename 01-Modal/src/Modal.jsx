import React, { useEffect, useRef, useState } from 'react'

const Modal = ({setIsOpen, isOpen}) => {

    const [inputValue, setInputValue] = useState("");
    const outSideClick = useRef();
    const handleValue = (value) =>{
        setInputValue(value);
    }

    const handleSubmit = () => {
        if(inputValue === ""){
            alert("Please Input Your Name Before Submit");
            return;
        }
        setIsOpen(false);
    }

    useEffect(()=> {
        const handleOutSideClick = (e) => {
            if (outSideClick.current && !outSideClick.current.contains(e.target)){
                setIsOpen(false);
            }
        };

        const handleEscKey = (e) => {
            if(e.key === 'Escape'){
                setIsOpen(false);
            }
        };

        if(isOpen){
            document.addEventListener("keydown", handleEscKey);
            document.addEventListener("mousedown", handleOutSideClick);
        }

        return () => {
            document.removeEventListener("keydown", handleEscKey);
            document.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [isOpen]);

  return (
    <div className='fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center flex-col'>
        <div
        ref={outSideClick} 
        className='h-auto w-auto bg-white p-6 flex flex-col gap-6'>
            <div 
            onClick={() => setIsOpen(false)}
            className='text-2xl text-black font-bold cursor-pointer text-end'> X </div>
            <p className='text-md text-black'>
                This is the Modal Pop UP Content.
            </p>
            <div>
                <label htmlFor="modalInput" className="text-sm mb-2 font-bold mt-4 text-gray-700">
                Enter your Name:
                </label>
                <input
                id='modalInput'
                onChange={(e) => handleValue(e.target.value)}
                type="text" value={inputValue}
                className='border border-gray-300 rounded w-full p-2'/>
            </div>

            <div className='flex'>
                <button 
                onClick={handleSubmit}
                className='bg-green-500 text-white rounded-sm text-md font-semibold p-2'> Submit </button>
            </div>
        </div>

    </div>
  )
}

export default Modal
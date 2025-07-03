import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const ModalRev = ( {setIsOpen, isOpen}) => {
    const outSideClick = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(outSideClick.current && !outSideClick.current.contains(e.target)){
                setIsOpen(false);
            }
        }

        const handleKeyBoardButton = (e) => {
            if(e.key === "Escape"){
                setIsOpen(false);
            }
        }

        if(isOpen){
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleKeyBoardButton);
        }

        return () => {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleKeyBoardButton);
        }
    },[]);

  return (
    <div className={`w-full h-screen flex justify-center items-center backdrop:blur-sm bg-black/30 inset-0 fixed z-50`}>
        <div 
        ref={outSideClick}
        className='w-auto h-auto rounded-md bg-white flex p-10 gap-10'>
            <p className='w-full h-auto self-center'> I am modal </p>
            <button className='text-black text-2xl text-start' onClick={() => setIsOpen((prev => !prev))}> X </button>
        </div>
    </div>
  )
}

export default ModalRev
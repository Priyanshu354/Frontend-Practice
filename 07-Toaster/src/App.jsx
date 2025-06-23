import { useState, useContext } from 'react'
import { ToastContext, useToast } from './ToastContext';

function App() {
  const {addToast} = useToast();
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
      <div className='grid grid-cols-2 justify-center items-center gap-2'>
          <button 
          onClick={() => {addToast("Hey Killer", "Info", "top-right")}}
          className='p-4 text-md rounded bg-amber-50 cursor-pointer'> Info </button>
          <button 
          onClick={() => {addToast("Hey Killer", "Success", "top-right")}}
          className='p-4 text-md rounded bg-amber-50 cursor-pointer'> Success </button>
          <button 
          onClick={() => {addToast("Hey Killer", "Warning", "bottom-right")}}
          className='p-4 text-md rounded bg-amber-50 cursor-pointer'> Warning </button>
          <button 
          onClick={() => {addToast("Hey Killer", "Error", "bottom-left")}}
          className='p-4 text-md rounded bg-amber-50 cursor-pointer'> Error </button>
      </div>
    </div>
  )
}

export default App

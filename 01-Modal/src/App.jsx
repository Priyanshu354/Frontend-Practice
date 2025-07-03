import { useState } from 'react'
import Modal from './Modal';
import ModalRev from './assets/Revision/ModalRev';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
    <div className='width-full h-screen bg-black flex items-center flex-col gap-4'>
      <h1 className='text-7xl font-extrabold text-white text-center'>Modal</h1>
      <button 
      onClick={handleIsOpen}
      className='p-2 text-md bg-blue-600 rounded-lg text-white font-semibold'>POPUP</button>
      {(isOpen) && <ModalRev setIsOpen={setIsOpen} isOpen={isOpen}/>}
    </div>
    </>
  )
}

export default App

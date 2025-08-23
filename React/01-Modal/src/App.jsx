import React, { useState, useRef } from 'react';
import Modal from './Modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#D1D5DC]">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(true)}
        className="text-[#101828] font-semibold cursor-pointer backdrop:blur-2xl bg-[#C6CAD2] px-4 py-2 rounded-md hover:bg-gray-400
        transition-all ease-in duration-200 shadow-sm"
      >
        Open Dialog
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        triggerRef={buttonRef}
      >
        <h2 className="text-xl font-bold mb-4">Portal Modal</h2>
        <p className="mb-4 text-gray-700">
          This modal uses <code>createPortal</code> directly for advanced layering and isolation.
        </p>
        <button
          onClick={() => setIsOpen(false)}
          className="px-4 py-2 bg-green-600 text-white rounded-md font-semibold cursor-pointer"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default App;

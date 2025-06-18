import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Description = ({ setStep }) => {

  const handlePrevClick = () => {
    setStep((prev) => (prev-1 >= 0) ? prev - 1 : prev);
  }

  return (
    <div className='flex flex-col w-full h-full md:mt-10 mt-4 justify-between'>
      {/* button */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handlePrevClick}
            className="px-6 py-2 rounded-md text-white bg-offColor font-semibold flex gap-2"
          >
            <FaLongArrowAltLeft className="self-center" /> Previous
          </button>
  
          <button
            type="submit"
            className="px-6 py-2 rounded-md text-white bg-onColor font-semibold flex gap-2"
          >
            Next <FaLongArrowAltRight className="self-center" />
          </button>
        </div>
    </div>
  )
}

export default Description
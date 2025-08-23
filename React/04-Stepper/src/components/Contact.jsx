import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

const Contact = ({ setStep, contactDetails, setContactDetails }) => {
  const [errors, setErrors] = useState({});

  const handlePrevClick = () => {
    setStep((prev) => (prev-1 >= 0) ? prev - 1 : prev);
  }

  const validity = () => { 
    const newError = {};
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let noRegex = /^\d{10}$/;
    let mail = contactDetails.email;
    if (!regex.test(mail)) {
      newError.email = "Enter valid Email";
    }
    if(!noRegex.test(contactDetails.mobNo)){
      newError.mobNo = "Enter Valid Number";
    }
    if(!noRegex.test(contactDetails.personalNo)){
      newError.personalNo = "Enter Valid Number";
    }

    return newError;
  }

  const handleNextClick = () => {
    const validationErrors = validity();
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
      //setStep((prev) => prev + 1);
    }
    else{
      setErrors({});
      setStep((prev) => prev + 1);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setContactDetails({...contactDetails, [name] : value});
  }


  return (
    <div className="flex flex-col w-full h-full md:mt-10 mt-4 justify-between">
      {/* heading */}
      <div>
         <h1 className="text-3xl font-bold text-white text-center">Contact Details</h1>
         {/* contact Detals */}
        <form onSubmit={handleNextClick} noValidate 
        className="mt-6 flex flex-col gap-10 justify-center items-center">
          <div className="flex flex-col">
            <label htmlFor="email">Email <span className="text-sm ml-0.5 text-red-500">*</span></label>
            <input type="text"
            name="email"
            id="email"
            value={contactDetails.email}
            onChange={(e) => {handleChange(e)}}
            className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"/>
            {errors.email && <p className="text-sm text-red-500"> {errors.email} </p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="mobNo"> Mobile No. <span className="text-sm ml-0.5 text-red-500">*</span></label>
            <input type="text"
            name="mobNo"
            id="mobNo"
            value={contactDetails.mobNo}
            onChange={handleChange}
            className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"/>
            {errors.mobNo && <p className="text-sm text-red-500"> {errors.mobNo} </p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="personalNo"> Contact No. <span className="text-sm ml-0.5 text-red-500">*</span></label>
            <input type="text"
            name="personalNo"
            id="personalNo"
            value={contactDetails.personalNo}
            onChange={handleChange}
            className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"/>
            {errors.personalNo && <p className="text-sm text-red-500"> {errors.personalNo} </p>}
          </div>
        </form>
      </div>

      {/* button */}
      <div className="flex justify-center mt-6 gap-10">
        <button
          type="button"
          onClick={handlePrevClick}
          className="md:px-6 px-4 py-2 rounded-md text-white bg-offColor font-semibold flex gap-2"
        >
          <FaLongArrowAltLeft className="self-center" /> Previous
        </button>

        <button
          type="submit"
          onClick={handleNextClick}
          className="md:px-6 px-4 py-2 rounded-md text-white bg-onColor font-semibold flex gap-2"
        >
          Next <FaLongArrowAltRight className="self-center" />
        </button>
      </div>
    </div>
  )
}

export default Contact
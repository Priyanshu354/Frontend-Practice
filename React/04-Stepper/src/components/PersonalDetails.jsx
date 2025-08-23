import { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const PersonalDetails = ({ setStep, formData, setFormData }) => {
  const [hobby, sethobby] = useState("");
  const [errorData, setErrorData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validityCheck = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Please Enter First Name";
    if (!formData.lastName.trim()) newErrors.lastName = "Please Enter Last Name";
    if (!formData.dob.trim()) newErrors.dob = "Please Enter DOB";
    if (!formData.fatherName.trim()) newErrors.fatherName = "Please Enter Father Name";
    if (!formData.motherName.trim()) newErrors.motherName = "Please Enter Mother Name";
    return newErrors;
  };

  const handlePrevClick = () => {
    setStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    const validationErrors = validityCheck();
    if (Object.keys(validationErrors).length > 0) {
      setErrorData(validationErrors);
      //setStep((prev) => prev + 1);
    } else {
      setErrorData({});
      setStep((prev) => prev + 1);
    }
  };

  const handlehobby = (e) => {
    sethobby(e.target.value);
  };

  const handlehobbies = () => {
    if (hobby.trim() === "") return;
    setFormData({
      ...formData,
      hobbies: [...formData.hobbies, hobby.trim()],
    });
    sethobby("");
  };

  const removeHobby = (indexToRemove) => {
    const updated = formData.hobbies.filter((_, index) => index !== indexToRemove);
    setFormData({ ...formData, hobbies: updated });
  };


  return (
    <div className="flex flex-col w-full h-full md:mt-10 justify-between">
      <div>
        <h1 className="text-white text-5xl font-bold">Personal Details</h1>
        <form
          onSubmit={handleNextClick}
          noValidate
          className="mt-6 grid md:grid-cols-2 grid-cols-1 content-around gap-10 justify-around"
        >
          {/* Other input fields (unchanged) */}
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-sm text-white">
              First Name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"
            />
            {errorData.firstName && <p className="text-sm text-red-500">{errorData.firstName}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="text-sm text-white">
              Last Name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"
            />
            {errorData.lastName && <p className="text-sm text-red-600">{errorData.lastName}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="dob" className="text-sm text-white">
              DOB <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"
            />
            {errorData.dob && <p className="text-sm text-red-600">{errorData.dob}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="fatherName" className="text-sm text-white">
              Father Name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"
            />
            {errorData.fatherName && <p className="text-sm text-red-600">{errorData.fatherName}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="motherName" className="text-sm text-white">
              Mother Name <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="motherName"
              id="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"
            />
            {errorData.motherName && <p className="text-sm text-red-600">{errorData.motherName}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="hobbies" className="text-sm text-white">
              Hobbies
            </label>
            <div className="flex items-center">
              <input
                type="text"
                name="hobbies"
                id="hobbies"
                value={hobby}
                onChange={handlehobby}
                className="p-2 border-2 border-offColor focus:outline-none focus:ring-2 focus:ring-onColor focus:border-none"
              />
              <button
                type="button"
                onClick={handlehobbies}
                className="bg-onColor text-white text-sm h-full ml-3 rounded-md p-2"
              >
                Enter
              </button>
            </div>
          </div>
        </form>
      </div>
      

      { formData.hobbies.length > 0 &&
      <div className="w-full p-4 flex gap-4">
         {formData.hobbies.map((hob, index) => (
            <div 
            key={index}
            className="bg-white text-black flex gap-4 p-2 rounded-md">
              <h3>{hob}</h3>
              <ImCross className="text-md cursor-pointer" onClick={() => removeHobby(index)} />
            </div>)
          )}
      </div>}

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
          onClick={handleNextClick}
          className="px-6 py-2 rounded-md text-white bg-onColor font-semibold flex gap-2"
        >
          Next <FaLongArrowAltRight className="self-center" />
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;

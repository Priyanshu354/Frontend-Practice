import { useState, useRef, useEffect } from 'react';
import PersonalDetails from './PersonalDetails';
import Contact from './Contact';
import Description from './Description';
import Education from './Education';
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt, FaUniversity } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";

const Stepper = () => {
    const [step, setStep] = useState(0);
    const [lineHeight, setLineHeight] = useState(0);
    const stepRef = useRef([]);

    const [personalData, setPersonalData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        fatherName: "",
        motherName: "",
        hobbies: [],
    });

    const [contactDetails, setContactDetails] = useState({
        email: "",
        mobNo: "",
        personalNo : "",
    })

    const steps = [<PersonalDetails setStep={setStep} formData={personalData} setFormData={setPersonalData}/>, 
    <Contact setStep={setStep} contactDetails={contactDetails} setContactDetails={setContactDetails} />, 
    <Education setStep={setStep}/>, <Description setStep={setStep}/>];

    useEffect(() => {
        const calculateOffsets = () => {
            const firstDot = stepRef.current[0];
            const lastDot = stepRef.current[steps.length - 1];
            if (firstDot && lastDot) {
                const height = lastDot.offsetTop - firstDot.offsetTop;
                setLineHeight(height);
            }
        } 

        calculateOffsets(); // run once

        // Re-run when screen resizes
        window.addEventListener('resize', calculateOffsets);

        return () => window.removeEventListener('resize', calculateOffsets);
    },[steps.length]);

    const handleProgress = () => {
        if (steps.length <= 1) return 0;
        return (lineHeight / (steps.length - 1)) * step;
    };

    const CurrentComponent = steps[step];

    return (
        <div className='w-full min-h-screen px-6 bg-primaryColor text-white flex'>
            {/* Step Labels & Icons */}
            <div className='hidden md:flex w-auto gap-5'>
                <div className='flex flex-col justify-around'>
                    {/* Step1 */}
                    <div className='flex gap-3'>
                        <div className={`${ step >= 0 ? "bg-onColor" : "bg-offColor"} px-2 py-2 rounded-md`}>
                            <IoIosContact className='text-3xl' />
                        </div>
                        <span className={`${ step >= 0 ? "text-onColor" : "text-offColor"} text-xl font-semibold self-center`}>Personal Details</span>
                    </div>

                    {/* Step2 */}
                    <div className='flex gap-3'>
                        <div className={`${ step >= 1 ? "bg-onColor" : "bg-offColor"} px-2 py-2 rounded-md`}>
                            <FaPhoneAlt className='text-3xl' />
                        </div>
                        <span className={`${ step >= 1? "text-onColor" : "text-offColor"} text-xl font-semibold self-center`}>Contact Details</span>
                    </div>

                    {/* Step3 */}
                    <div className='flex gap-3'>
                        <div className={`${ step >= 2 ? "bg-onColor" : "bg-offColor"} px-2 py-2 rounded-md`}>
                            <FaUniversity className='text-3xl' />
                        </div>
                        <span className={`${ step >= 2 ? "text-onColor" : "text-offColor"} text-xl font-semibold self-center`}>Education</span>
                    </div>

                    {/* Step4 */}
                    <div className='flex gap-3'>
                        <div className={`${ step >= 3 ? "bg-onColor" : "bg-offColor"} px-2 py-2 rounded-md`}>
                            <MdOutlineDescription className='text-3xl' />
                        </div>
                        <span className={`${ step >= 3 ? "text-onColor" : "text-offColor"} text-xl font-semibold self-center`}>Description</span>
                    </div>
                </div>

                {/* Step Progress Dots */}
                <div className='relative flex flex-col justify-around'>
                    {/* Outer gray line */}
                    <div
                        className='absolute w-0.5 bg-offColor left-[7px] z-0'
                        style={{ height: `${lineHeight}px` }}
                    >
                        {/* Inner progress line */}
                        <div
                            className='absolute w-0.5 bg-onColor left-0 top-0 z-10 transition-all duration-300'
                            style={{ height: `${handleProgress()}px` }}
                        ></div>
                    </div>

                    {/* Dots */}
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => (stepRef.current[i] = el)}
                            className='flex gap-3'
                        >
                            <div
                                className={`relative z-10 h-4 w-4 rounded-full transition-colors duration-300 ${
                                    i <= step ? 'bg-onColor' : 'bg-offColor'
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className='w-full min-h-screen md:p-10 flex flex-col p-4'>
                {CurrentComponent}
            </div>
        </div>
    );
};

export default Stepper;

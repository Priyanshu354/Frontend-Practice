import React, { useRef, useState } from 'react'

const Otp = ({size}) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [otp, setOtp] = useState([...Array(size).fill("")]);
    const refArray = useRef([]);

    const handleNewDigit = (value) => {
        if(value.length == 1) return value;
        const existDigit = String(otp[currIndex]);
        return value
                .split("")
                .filter((digit) => (digit !== existDigit))
                .join("");
    }

    const handleValEnter = (e) => {
        const {value} = e.target;
        const getNewDigit = handleNewDigit(value);
        const digit = Number(getNewDigit);
        if(isNaN(digit)){
            return ;
        }

        //console.log("currIndex", currIndex);
        const newOtp = [...otp];
        newOtp[currIndex] = digit;
        setOtp(newOtp);

        if(currIndex+1 < size){
            const nextIndex = currIndex + 1;
            //console.log("nextIndex", nextIndex);
            setCurrIndex(nextIndex);
            refArray.current[nextIndex]?.focus();
        }
    }

    const handleClick = (i) => {
        setCurrIndex(i);
    }

    const handleKeyDown = (e) => {
        //console.log(e.key);
        if(e.key === "ArrowRight"){
            if(currIndex+1 < size){
                const nextIndex = currIndex + 1;
                setCurrIndex(nextIndex);
                refArray.current[nextIndex]?.focus();
            }
        }
        else if(e.key === "ArrowLeft"){
            if(currIndex-1 >= 0){
                const nextIndex = currIndex - 1;
                setCurrIndex(nextIndex);
                refArray.current[nextIndex]?.focus();
            }
        }
        else if(e.key === "Backspace" || e.key === "Delete"){
            const newOtp = [...otp];
            newOtp[currIndex] = "";
            setOtp(newOtp);
        }
        else{
            return;
        }
    }

  return (
    <div className='p-6'>
        <form className='flex gap-1'>
            {
                [...Array(size)].map((_, i) => {
                    return ( <div 
                        key={i}
                        onClick={() => handleClick(i)}
                        className='w-24 h-24'>
                        <input type="text"
                        ref={(el) => (refArray.current[i] = el)}
                        onChange={(e) => handleValEnter(e)} value={otp[i]}
                        onKeyDown={(e) => handleKeyDown(e)}
                        className="border-black border-2 h-14 w-14 text-5xl focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-500"/>
                    </div>)
                })
            }
        </form>
    </div>
  )
}

export default Otp
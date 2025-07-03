import React, { useEffect, useRef, useState } from 'react';

const RevisionStepper = () => {
    const [lineWidth, setLineWidth] = useState(0);
    const [lineMarginLeft, setLineMarginLeft] = useState(0);
    const [active, setActive] = useState(1);
    const [progressBarWidth, setprogressBarWidth] = useState(0);

    const refArray = useRef([]);

    // Rember the game getBoundingClientRect

    useEffect(() => {
        const handleLineWidth = () => {
            if(!refArray.current[0] && !refArray.current[1]) return ;
            console.log(refArray.current[0].offsetLeft);
            console.log(refArray.current[1].offsetLeft);

            const lineWidthVal = refArray.current[1].offsetLeft - refArray.current[0].offsetLeft;
            setLineWidth(lineWidthVal);
            setLineMarginLeft(refArray.current[0].offsetLeft);
        };

        handleLineWidth();
        window.addEventListener('resize', handleLineWidth);
        return () => window.removeEventListener('resize', handleLineWidth);
    }, []);

    useEffect(() => {
        const handleProgessBar = () => {
            const w = (lineWidth / 3) * (active - 1);

            setprogressBarWidth(w);
        };

        handleProgessBar();
    }, [active,lineWidth])
    
    return (
        <div className='w-full flex justify-around mt-6 relative flex-col'>
            <div className='w-full flex justify-around mt-6 relative'>
                <div 
                    ref={el => refArray.current[0] = el}
                    className={`w-12 h-12 rounded-full text-black border-2 border-black flex items-center justify-center 
                    ${active === 1 ? "bg-blue-500" : "bg-green-500"}`}>
                    1
                </div>
                <div 
                    className={`w-12 h-12 rounded-full text-black border-2 border-black flex items-center justify-center 
                    ${active === 2 ? "bg-blue-500" : "bg-gray-300"}`}>
                    2
                </div>
                <div 
                    className={`w-12 h-12 rounded-full text-black border-2 border-black flex items-center justify-center 
                    ${active === 3 ? "bg-blue-500" : "bg-gray-300"}`}>
                    3
                </div>
                <div 
                    ref={el => refArray.current[1] = el}
                    className={`w-12 h-12 rounded-full text-black border-2 border-black flex items-center justify-center 
                    ${active === 4 ? "bg-blue-500" : "bg-gray-300"}`}>
                    4
                </div>

                <div className='absolute left-0 h-2 w-full bg-gray-500 -z-10 flex' style={{top: "47%", width: `${lineWidth}px`, marginLeft:
            `${lineMarginLeft}px`}}>
                </div>
                <div className='absolute left-0 h-2 bg-green-600 -z-10' style={{top: "47%", width: `${progressBarWidth}px`, marginLeft:
            `${lineMarginLeft}px`}}></div>
            </div>
            <div className='flex justify-center mt-6'>
                <button onClick={() => setActive((prev) => (prev+1 <= 4 ? prev+1 : prev))} 
                className='px-4 py-2 bg-blue-500 text-white rounded'> Next </button>
            </div>
        </div>
    );
};

export default RevisionStepper;

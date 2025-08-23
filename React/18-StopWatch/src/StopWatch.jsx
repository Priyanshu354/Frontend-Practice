import React, { useState, useEffect, useRef } from 'react';

const StopWatch = () => {
  const [second, setSecond] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const intervalRef = useRef(null);

  const handleReset = () => {
    setSecond(0);
    setMin(0);
    setHour(0);
    setIsStart(false);
    clearInterval(intervalRef.current);
  };

  const handleTimer = () => {
    if (isStart) {
      // Stop
      clearInterval(intervalRef.current);
      setIsStart(false);
    } else {
      // Start
      setIsStart(true);
      intervalRef.current = setInterval(() => {
        setSecond(prevSecond => {
          let sec = prevSecond;
          let minVal = min;
          let hourVal = hour;

          if (sec === 0) {
            if (minVal === 0) {
              if (hourVal === 0) {
                clearInterval(intervalRef.current);
                setIsStart(false);
                return 0;
              } else {
                hourVal -= 1;
                setHour(hourVal);
                minVal = 59;
                setMin(minVal);
                sec = 59;
              }
            } else {
              minVal -= 1;
              setMin(minVal);
              sec = 59;
            }
          } else {
            sec -= 1;
          }

          return sec;
        });
      }, 1000);
    }
  };

  const handleChange = (e) => {
    if (isNaN(e.target.value)) return;

    const value = Math.max(0, Number(e.target.value));

    if (e.target.name === "second") {
      setSecond(value);
    }
    if (e.target.name === "min") {
      setMin(value);
    }
    if (e.target.name === "hour") {
      setHour(value);
    }
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className='w-full h-full flex flex-col justify-center items-center mt-10 gap-6'>
      <h1 className='text-lg font-semibold'>Count Down Timer</h1>

      <div className='flex gap-4'>
        <input
          type="text"
          className='w-14 h-14 border-2 focus:ring-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-center'
          value={hour}
          onChange={handleChange}
          name='hour'
          disabled={isStart}
        />
        <span className='text-2xl self-center font-bold'>:</span>
        <input
          type="text"
          className='w-14 h-14 border-2 focus:ring-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-center'
          value={min}
          onChange={handleChange}
          name='min'
          disabled={isStart}
        />
        <span className='text-2xl self-center font-bold'>:</span>
        <input
          type="text"
          className='w-14 h-14 border-2 focus:ring-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500 text-center'
          value={second}
          onChange={handleChange}
          name='second'
          disabled={isStart}
        />
      </div>

      <div className='flex gap-4'>
        <button
          className='border-2 px-4 py-2 rounded-md bg-blue-500 text-white cursor-pointer'
          onClick={handleTimer}
        >
          {isStart ? "Stop" : "Start"}
        </button>
        <button
          className='border-2 px-4 py-2 rounded-md bg-red-500 text-white cursor-pointer'
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;

import React, { useEffect, useState } from 'react';

const images = [
    "https://picsum.photos/seed/1/1200/1200",
    "https://picsum.photos/seed/2/1200/1200",
    "https://picsum.photos/seed/3/1200/1200",
    "https://picsum.photos/seed/4/1200/1200",
    "https://picsum.photos/seed/5/1200/1200",
    "https://picsum.photos/seed/6/1200/1200",
    "https://picsum.photos/seed/7/1200/1200",
    "https://picsum.photos/seed/8/1200/1200",
    "https://picsum.photos/seed/9/1200/1200",
];

const Carousel = () => {
    const [currPic, setCurrPic] = useState(0);
    const [inDiv, setInDiv] = useState(false);

    const handleClick = (add) => {
        setCurrPic((prev) => (prev + add + images.length) % images.length);
    };

    useEffect(() => {
        let intervalId;

        if (!inDiv) {
            intervalId = setInterval(() => {
                setCurrPic((prev) => (prev + 1) % images.length);
            }, 3000);
        }

        return () => clearInterval(intervalId);
    }, [inDiv]);

    return (
        <div
            onMouseEnter={() => setInDiv(true)}
            onMouseLeave={() => setInDiv(false)}
            className='max-w-full h-[400px] relative container mx-auto'
        >
            <img
                src={images[currPic]}
                alt="carousel"
                className='object-cover w-full h-full'
            />
            <button
                onClick={() => handleClick(-1)}
                className='bg-black font-semibold absolute top-1/2 left-10 text-white rounded p-2 cursor-pointer'
            >
                prev
            </button>
            <button
                onClick={() => handleClick(1)}
                className='bg-black font-semibold absolute top-1/2 right-10 text-white rounded p-2 cursor-pointer'
            >
                next
            </button>
        </div>
    );
};

export default Carousel;

import React, { useRef, useState } from 'react'

const StarRating = ({number}) => {
    const refArray = useRef([]);
    const [hoverState, setHoverState] = useState(null);
    const [prevClick, setPrevClick] = useState(null);

    const handleMouseEnter = (e) => {
        for (let i = 0; i < refArray.current.length; i++) {
            const element = refArray.current[i];
            element.style.color = "yellow";
            element.style.transition = "all 200ms ease-in-out";
            if (element.contains(e.target)) {
                setHoverState(i+1);
                break;
            }
        }
    };

    const handleMouseLeave = (e) => {
        if(hoverState === null) return;
        let start = (prevClick !== null ? prevClick : 0)
        for (let i = start; i < hoverState; i++) {
            const element = refArray.current[i];
            element.style.color = "black";
        }
        setHoverState(null);
    };

    const handleFutherBlack = (start) => {
        //console.log(start);
        for(let i = start;i<refArray.current.length;i++){
            const element = refArray.current[i];
            element.style.color = "black";
        }
    }

    const handlclick = (e) => {
        for (let i = 0; i < refArray.current.length; i++) {
            const element = refArray.current[i];
            element.style.color = "yellow";
            if (element.contains(e.target)) {
                setPrevClick(i);
                handleFutherBlack(i+1);
                break;
            }
        }
    };

  return (
    <div className='w-full flex flex-col justify-center items-center p-15'>
        <h1 className='font-bold text-3xl'>Star Rating</h1>
        <div className='flex gap-1 mt-6'>
            {
                [...Array(number)].map((_, i) => {
                    return (<span key={i}
                        onMouseEnter={(e) => {handleMouseEnter(e)}}
                        onMouseLeave={(e) => {handleMouseLeave(e)}}
                        onClick={(e) => {handlclick(e)}}
                        ref={(el) => (refArray.current[i] = el)}
                        className='text-3xl cursor-pointer'> &#9733; </span>)
                })
            }
        </div>
    </div>
  )
}

export default StarRating
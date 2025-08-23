import React, {useState} from 'react'

const Accordion = ( {data} ) => {
    const [isOpen, setIsOpen] = useState([...Array(data.length)].fill(false));

    const handleOpen = (i) => {
        const newArray = [...isOpen];
        newArray[i] = !newArray[i];
        setIsOpen(newArray);
    };

  return (
    <div className='w-full container mx-auto flex flex-col'>
        {
            data.map((data, i) => (
                <div
                key={i} 
                className='w-full'>
                    <div className='flex justify-between px-6'> 
                        <h1 className='text-lg font-semibold'> {data.question} </h1>
                        {isOpen[i] ? <button onClick={() => handleOpen(i)}
                        className=' cursor-pointer'> - </button> : 
                        <button onClick={() => handleOpen(i)}
                        className=' cursor-pointer'> + </button>
                        }
                    </div>

                    <div>
                        {isOpen[i] && <h3 className='p-6'> {data.answer} </h3>}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Accordion
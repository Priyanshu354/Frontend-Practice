import React from 'react';

const DragDrop = ({ data, setTodoData }) => {
    const handleDragStart = (e, container, index) => {
        e.dataTransfer.setData("section", container);
        e.dataTransfer.setData("index", index);
        e.target.style.opacity = "0.5";
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, container) => {
        e.preventDefault();

        const section = e.dataTransfer.getData("section");
        const index = e.dataTransfer.getData("index");

        //console.log(section, index);

        if(!section || index === null) return ;

        let moveData = data[section][index];

        //console.log(moveData);
        let newData = {...data};
        newData[section].splice(index,1);
        newData[container].push(moveData);
        setTodoData(newData);
    };

    const handleDragEnd = (e) => {
        e.target.style.opacity = "1";
    };

  return (
    <div className='w-full h-full p-4 flex gap-10 justify-center'>
      {
        Object.entries(data).map(([container, items], index) => (
          <div
          onDragOver={handleDragOver}
          onDrop={(e) => {handleDrop(e, container)}}
          key={index} className='p-4 bg-gray-600 shadow-lg shadow-amber-50 min-w-auto'>
            <h2 className='text-white font-bold mb-2'>{container}</h2>
            {
              items.map((item, itemIndex) => (
                <div
                  draggable
                  onDragStart={(e)=> {handleDragStart(e, container, itemIndex)}}
                  onDragEnd={handleDragEnd}
                  key={itemIndex}
                  className='font-semibold text-lg text-white mb-2 p-2 bg-gray-800 rounded'
                >
                  {item}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default DragDrop;

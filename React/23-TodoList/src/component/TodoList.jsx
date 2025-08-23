import React, { useEffect, useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todoArray, setTodoArray] = useState(() => {
        const stored = localStorage.getItem("todoArray");
        return stored ? JSON.parse(stored) : [];
    });
    const [completed, setCompleted] = useState(() => {
        const storedCompteted = localStorage.getItem("completed");
        return storedCompteted ? JSON.parse(storedCompteted) : []; 
    });

    const [editable , setEditable] = useState(null);
    const [editableInd , setEditableInd] = useState(null);

    const handleAddTodo = () => {
        if (todo === "") return;
        setTodoArray([...todoArray, todo]);
        setTodo("");
    };

    const handleTodo = (e) => {
        setTodo(e.target.value);
    };

    const handleEditValue = (e) => {
        setEditable(e.target.value);
    }

    const handleEdit = (index) => {
        setEditable(todoArray[index]);
        setEditableInd(index);
    }

    const handleEditDone = (index) => {
        setTodoArray(todoArray.map((todo, i) => {
            console.log(i, index, todo, editable);
            return i === index ? editable : todo;
        }));
        setEditable(null);
        setEditableInd(null);
    }

    const handleDelete = (index) => {
        setTodoArray(todoArray.filter((_, i) => i !== index));
        setCompleted(completed.filter(i => i !== index));
    };

    const handleComplete = (index) => {
        setCompleted(prev => 
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    useEffect(() => {
        localStorage.setItem("todoArray", JSON.stringify(todoArray));
        localStorage.setItem("completed", JSON.stringify(completed));
    }, [todoArray, completed]);


    useEffect(() =>{
        const handleEnter = (e) =>{
            if(e.key === "Enter"){
                handleAddTodo();
            }
        }
        document.addEventListener("keydown", handleEnter);
        return () => document.addEventListener("", handleEnter);
    });

    return (
        <div className='w-full h-full flex flex-col justify-center items-center p-10'>
            <div className='flex w-full gap-2 justify-center items-center'>
                <input
                    type="text"
                    className="border-2 focus:border-4 focus:border-blue-600 focus:outline-none w-1/2 h-10 text-lg font-semibold px-4"
                    value={todo}
                    onChange={handleTodo}
                />
                <button
                    onClick={handleAddTodo}
                    className='text-md rounded-md px-4 py-2 text-white bg-blue-500 w-24'>
                    Add
                </button>
            </div>

            <div className='flex flex-col gap-4 w-full mt-4'>
                {todoArray.map((todo, index) => (
                    <div key={index} className='flex justify-between gap-4'>
                        {
                            editableInd === index ? 
                            <input 
                            type="text"
                            className="border-2 focus:border-4 focus:border-blue-600 focus:outline-none w-1/2 h-10 text-lg font-semibold px-4"
                            value={editable}
                            onChange={handleEditValue}
                            /> 

                            :

                            <h3
                            className={`text-lg font-semibold border-2 w-full text-center flex justify-center items-center
                                ${completed.includes(index) ? "line-through text-gray-400" : ""}`}
                        >
                            {todo}
                        </h3>

                        }
                        <div className='flex gap-3'>
                            {
                                editableInd !== index ? <button
                                    onClick={() => handleEdit(index)}
                                    className='text-md rounded-md px-4 py-2 text-white bg-gray-500'>
                                    Edit
                                </button> :
                                <button
                                    onClick={() => handleEditDone(index)}
                                    className='text-md rounded-md px-4 py-2 text-white bg-green-500'>
                                    Done
                                </button>
                            }
                            <button
                                onClick={() => handleComplete(index)}
                                className='text-md rounded-md px-4 py-2 text-white bg-green-500'>
                                Tick
                            </button>
                            <button
                                onClick={() => handleDelete(index)}
                                className='text-md rounded-md px-4 py-2 text-white bg-red-600'>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;

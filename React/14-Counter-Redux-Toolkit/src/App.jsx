import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/slice/counterSlice';

function App() {
  const count = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <>
    <div className='w-full h-full flex gap-5'>
      <h1 className='text-3xl font-semibold'>Counter</h1>
      <button onClick={() => (dispatch(increment(-1)))}
      className='px-4 py-2 border-2 cursor-pointer'> - </button>
      <p className='text-black text-center self-center'>{count}</p>
      <button onClick={() => (dispatch(increment(1)))}
      className='px-4 py-2 border-2 cursor-pointer'> + </button>
    </div>
    </>
  )
}

export default App

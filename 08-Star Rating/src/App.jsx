import { useState } from 'react'
import StarRating from './StarRating'

function App() {
  const [number, setNumber] = useState(10);
  return (
    <div className='w-full min-h-screen bg-gray-400'>
    <StarRating number={number}/>
    </div>
  )
}

export default App
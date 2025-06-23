import { useEffect, useState } from 'react'
import DragDrop from './components/DragDrop'

let data = {
  Todo: [
    "Solve 3 Codeforces Problem",
    "Build a features in my personal project",
    "Read Core Subject",
  ],
  Progess: [
    "Reading a book",
    "Learing web Dev",
  ],
  completed: [
    "2 Leetcode Questions",
    "Tiny habit",
  ]
}

function App() {
  const [initialData, setInitailData] = useState(data);

  return (
    <>
    <DragDrop data={initialData} setTodoData={setInitailData} />
    </>
  )
}

export default App

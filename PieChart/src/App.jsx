import { useState } from 'react'
import './App.css'
import PieChartWithCustomizedLabel from './Components/PieChartWithCustomizedLabel'
import SimplePieChart from './Components/SimplePiechart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PieChartWithCustomizedLabel/>
    <SimplePieChart/>
    </>
  )
}

export default App

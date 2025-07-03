import { useContext, useState } from 'react'
import { ThemeContext } from './ThemeContext'

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <>
     <div className={`flex flex-col justify-center items-center w-full min-h-screen gap-6 ${theme === 'light' ? "bg-white text-black" : "bg-black text-white"}`}>
      <h1 className='text 2xl font-semibold'> Dark Light Mode Website </h1>
      <p className='text-sm'> Hello! My React v19 Fans </p>
      <button
      onClick={toggleTheme}
      className={`bg-blue-500 rounded-md p-4 text-white cursor-pointer`} 
      > Switch to Light Mode </button>
     </div>

    </>
  )
}

export default App

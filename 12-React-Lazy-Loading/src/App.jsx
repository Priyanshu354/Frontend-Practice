import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
//import Dashboard from "../pages/Dashboard"
// import Profile from "../pages/Profile"
import Setting from "../pages/Setting"
import NotFound from "../pages/NotFound"
import Navbar from "../pages/Navbar"
import React, { Suspense } from "react";

const Profile = React.lazy(() => import('../pages/Profile'));
const Dashboard = React.lazy(() => import('../pages/Dashboard'));

function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="profile" element={<Profile/>} />
          <Route path="setting" element={<Setting/>} />
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Suspense>
    </>
  )
}

export default App

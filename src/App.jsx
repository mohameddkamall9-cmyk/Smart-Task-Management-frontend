import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import TaskCard from './components/TaskCard'
import Mainlanding from './components/Mainlanding'
import taskP from './assets/taskP.avif'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import Home from './pages/Home'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Features from './pages/Features'

function App() {
  const exampleTask = {
    title: 'clean the house',
    description: 'clean the house and do the dishes',
    status: 'in progress',
    priority: 'high',
    dueDateTime: '2023-05-01 12:00:00',
    image: taskP 

  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Home HomeObj={exampleTask} />} />
      <Route path="/features" element={<Features />} />
      <Route path="/login" element={<Login />} />


    </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TaskCard from './components/TaskCard'

function App() {
  const exampleTask = {
    title: 'clean the house',
    description: 'clean the house and do the dishes',
    status: 'in progress',
    priority: 'high',
    dueDateTime: '2023-05-01 12:00:00'

  }
  return (
    <>
    <TaskCard task={exampleTask} />

    </>
  )
}

export default App

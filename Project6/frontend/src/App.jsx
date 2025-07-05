import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NoteDetailPage'
import CreatePage from './pages/CreatePage'
import { Routes, Route } from "react-router"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import HomePage from '../pages/HomePage'
import NoteDetailPage from '../pages/NoteDetailPage'
import CreatePage from '../pages/CreatePage'
import { Routes, Route } from "react-router"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div data-theme="forest">
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
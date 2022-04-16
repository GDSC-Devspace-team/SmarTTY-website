import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className="text-gray-400 body-font flex flex-col h-screen" style={{ "background": "#0E093E" }}>
      <Navbar />
      <Landing />

    </main>
  )
}

export default App

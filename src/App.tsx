import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <Landing/>
      
    </main>
  )
}

export default App

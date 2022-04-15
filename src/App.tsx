import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About/>
    </main>
  )
}

export default App

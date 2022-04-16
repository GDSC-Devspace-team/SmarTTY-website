import { useState } from 'react'

import './App.css'
import Download from './components/Download'
import Landing from './components/Landing'

import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Landing/>
      <Download/>
      <Gallery/>
    </main>
  )
}

export default App

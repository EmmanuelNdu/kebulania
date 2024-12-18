import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import First from './components/First'
import About from './components/About'
import Key from './components/Key'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <First />
     <About />
     <Key />
    </>
  )
}

export default App

import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import First from './components/First'
import About from './components/About'
import Key from './components/Key'
import University from './components/University'
import Residential from './components/Residential'
import Green from './components/Green'
import Vision from './components/Vision'
import Developer from './components/Developer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <First />
     <About />
     <Key />
     <University />
     <Residential />
     <Vision />
     <Green />
     <Developer />
    </>
  )
}

export default App

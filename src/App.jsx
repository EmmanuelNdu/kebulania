import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import First from './components/First'
import About from './components/About'
import Key from './components/Key'
import University from './components/University'
import Residential from './components/Residential'
import Hotel from './components/Hotel'
import Innovation from './components/Innovation'
import Green from './components/Green'

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
     <Hotel />
     <Innovation />
     <Green />
    </>
  )
}

export default App

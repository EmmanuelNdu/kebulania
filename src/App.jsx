import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import First from './components/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <First />
    </>
  )
}

export default App

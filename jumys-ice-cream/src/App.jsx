import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import ProductCard from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    </>
  )
}

export default App
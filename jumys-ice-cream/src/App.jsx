import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'

// import ProductCard from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <Login/>
    </>
  )
}

export default App
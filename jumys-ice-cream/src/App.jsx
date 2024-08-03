import { useState } from 'react'
import './App.css'
import List_Rendering from './Components/MainCard'
// import Home from './Pages/Home'
// import ProductCard from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <List_Rendering/>
    </>
  )
}

export default App
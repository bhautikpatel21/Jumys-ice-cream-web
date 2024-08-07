import { useState } from 'react'
import './App.css'
import BlogCard from './Pages/BlogCard'
import Home from './Pages/Home' 
// import ProductCard from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <BlogCard/>
    </>
  )
}

export default App
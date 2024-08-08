import { useState } from 'react'
import './App.css'
import BlogCard from './Pages/BlogCard'
import Home from './Pages/Home' 
import Error404 from './Pages/Error404'
import AboutUs from './Pages/AboutUsPage'
// import ProductCard from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/>  */}
    {/* <BlogCard/> */}
    {/* <Error404/>  */}
    <AboutUs/>
    </>
  )
}

export default App
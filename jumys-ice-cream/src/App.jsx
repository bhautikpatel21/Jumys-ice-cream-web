import { useState } from 'react'
import './App.css'
import BlogCard from './Pages/BlogCard'
import Home from './Pages/Home' 
import Error404 from './Pages/Error404'
import AboutUs from './Pages/AboutUsPage'
import Contact from './Pages/Contact'
import Faq2 from './Pages/Faq2'
import Login from './Pages/Login'
import Wishlist from './Pages/Wishlist'
// import ProductCard from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/>  */}
    {/* <BlogCard/> */}
    {/* <Error404/>  */}
    {/* <AboutUs/> */}
    {/* <Contact/> */}
    {/* <Faq2/> */}
    {/* <Login/> */}
    <Wishlist/>
    </>

  )
}

export default App
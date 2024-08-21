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
import SignUp from './Pages/SignUp'
// import ProductCard from './Components/Card'
import ProductCard from './Components/Card'
import List_Renderingg from './Components/Cards_slider'
import Navbar from './Components/Nvbar_!'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    <Home/> 
    {/* <BlogCard/> */}
    {/* <Error404/>  */}
    {/* <AboutUs/> */}
    {/* <Contact/> */}
    {/* <Faq2/> */}
    {/* <Login/> */}
    {/* <Wishlist/> */}
    {/* <SignUp/> */}
    {/* <ProductCard/> */}
    {/* <Carousel/> */}
    {/* <List_Renderingg/> */}
    </>

  )
}

export default App
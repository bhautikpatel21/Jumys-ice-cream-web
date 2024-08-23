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
import NumberCounter from './Components/NumberCounter'
import FilterComponent from './Components/FilterComponent'
// import ProductCardProductList from './Components/ProductCardProductList'
import Shop from './Pages/Shop'
import HomeSlider1 from './Components/HomeSlider1'
import Navbar from './Components/Navbar'

// import ShopList from './Pages/ShopList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    {/* <Home/>  */}
    {/* <BlogCard/> */}
    {/* <Error404/>  */}
    {/* <AboutUs/> */}
    {/* <NumberCounter/> */}
    {/* <Contact/> */}
    {/* <Faq2/> */}
    {/* <Login/> */}
    {/* <Wishlist/> */}
    {/* <SignUp/> */}
    {/* <Carousel/> */}
    {/* <List_Renderingg/> */}
    {/* <FilterComponent/> */}
    {/* <ProductCardProductList/> */}
    {/* <Shop/> */}
    {/* <ShopList/> */}
    {/* <HomeSlider1/> */}
    </>

  )
}

export default App
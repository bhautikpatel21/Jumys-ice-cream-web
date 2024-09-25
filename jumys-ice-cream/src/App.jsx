import { useState } from 'react'
import './App.css'
import Layout from './Pages/Layout'
// import PriceRangeSlider from './Components/Range'
import PriceRange from './Components/Range'
import ShopList from './Pages/ShopList'
// import Product from './Pages/Product'
// import ProductList from './Components/NewProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Layout/> */}
    {/* <Product/> */}
    {/* <ProductList/> */}
    {/* <PriceRange/> */}
    <ShopList/>
    </>

  )
}

export default App
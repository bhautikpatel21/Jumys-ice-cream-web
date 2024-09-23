import { useState } from 'react'
import './App.css'
import Layout from './Pages/Layout'
import Product from './Pages/Product'
import ProductList from './Components/NewProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Layout/> */}
    {/* <Product/> */}
    <ProductList/>
    </>

  )
}

export default App
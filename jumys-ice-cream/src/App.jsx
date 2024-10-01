import { useState } from 'react'
import './App.css'
import Layout from './pages/Layout'
import ProductCardProductList from './Components/ProductCardList' 
import FilterComponent from './Components/FilterComponent'
import ProductCardList from './Components/ProductCardList'
import ShopList from './pages/ShopList'
import List_Renderingg from './Components/Cards_slider'
// import ShopProduct from './Components/ShopProduct'
import ShopProduct from './Components/renderOnSlide'

function App() {

  return (
    <>

    {/* <Layout/> */}
    {/* <ShopList/> */}
    <ShopProduct/>

    </>

  )
}

export default App
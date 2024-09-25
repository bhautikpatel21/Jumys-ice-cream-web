import { useState } from 'react'
import './App.css'
import Layout from './Pages/Layout'
import ShopList from './Pages/ShopList'
import CartPage from './Pages/CartPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    </>

  )
}

export default App
import { useState } from 'react'
import './App.css'
import Layout from './Pages/Layout'
import ShopList from './Pages/ShopList'
import Shop from './Pages/Shop'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    {/* <ShopList/> */}
    {/* <Shop/> */}
    </>

  )
}

export default App
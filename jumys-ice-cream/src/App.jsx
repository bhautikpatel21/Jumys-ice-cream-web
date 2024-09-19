import { useState } from 'react'
import './App.css'
import Layout from './Pages/Layout'
import ShopList from './Pages/ShopList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Layout/> */}
    <ShopList/>
    </>

  )
}

export default App
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import UncontrolledExample from './Components/Main_slider'
// import Baz from './Components/Card_slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <UncontrolledExample/>
    {/* <Baz/> */}

    </>
  )
}

export default App
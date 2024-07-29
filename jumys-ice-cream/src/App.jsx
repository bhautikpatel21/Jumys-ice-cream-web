import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import DropdownMenu from './Components/DropdownMenu'

function App() {
  // const [count, setCount] = useState(0)

  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const handleMouseEnter = () => {
  //   setDropdownVisible(true);
  // };

  // const handleMouseLeave = () => {
  //   setDropdownVisible(false);
  // };

  return (
    <>
    <Navbar/>
    </>
    // <>
    //   <Navbar/>
    //   <div className="App">
    //   <header className="App-header">
    //     <div
    //       className="menu"
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <button>Dropdown Menu</button>
    //       {/* <DropdownMenu /> */}
    //       {isDropdownVisible && <DropdownMenu />}
    //     </div>
    //   </header>
    // </div>
    // </>
  )
}

export default App

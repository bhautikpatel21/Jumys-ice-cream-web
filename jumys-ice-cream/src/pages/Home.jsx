import React from 'react'
import Navbar from '../Components/Navbar'
import slider1_img from '../assets/asset 5.png'
import spin from '../assets/asset 4.svg'
import Goo_root from '../assets/good-root.png'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-[800px] flex justify-center items-center gap-11' id='slider'>

        <div className='w-[500px] h-[350px] '>
            <h4 className='text-[1.1rem] font-semibold'>ICE CREAM SMILES</h4>
            <h1 id='Nav-text'>Frosty Delights: Treat Yourself To Creamy</h1><br />
            <button className='home-bt-shop'>Shop Now</button>
            <button className='home-bt2-shop'>See more</button>
        </div>

        <div className='w-[400px] h-[620px] '>
            <div class="w-32 h-32 absolute rounded-e-md text-[25px] flex justify-center items-center mt-56 -ml-14 ">
                <img className='spin_of' src={spin} alt="" />
                <h1 id='spin-text'>Get 30% <br />off</h1>
            </div>
            <img  src={slider1_img} alt="not found" />
        </div>

        <div className='w-[300px] h-[620px] '>
            <div className='good-root'>
                {/* <img className='ref' src={Goo_root} alt="" /> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Home

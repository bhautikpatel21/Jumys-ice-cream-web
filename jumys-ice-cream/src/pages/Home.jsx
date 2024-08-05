import React from 'react'
import Navbar from '../Components/Navbar'
// import slider1_img from '../assets/asset 5.png'
import spin from '../assets/asset 4.svg'
// import img_plant from '../assets/asset 38.png'
import cup from '../assets/asset 16.png'
import img17 from '../assets/asset 17.jpeg'
import img18 from '../assets/asset 18.jpeg'
import img19 from '../assets/asset 19.jpeg'
import List_Rendering from '../Components/MainCard'
import IceCreamCard from '../Components/HomeCard'
import ArticleCard from '../Components/ArticalCard'
import Footer from '../Components/Footer'
import HomeSlider1 from '../Components/HomeSlider1'
import HomeSecond_slider from '../Components/HomeSecond_slider'


const Home = () => {
  return (
    <>

    {/* Header */} 
    <Navbar/>

    {/* Slider 1 */}
    <HomeSlider1/>

    {/* Content */}
    <div className='w-full h-[350px] flex gap-10 justify-center'>

    <div className='h-full w-[700px] '>
        <div className='h-[60%] w-[700px] flex'>
            <div className='w-[40%] h-full '>
                <h1 className='div2-text'>Best Ice Cream Shops</h1>
            </div>

            <div className='w-[60%] h-full'>
            <p className='info'>It's quite possible that we are living in the golden age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term “chef” </p><br />
            <a href="" className='underline'>Read More</a>
            </div>
        </div><br/><br/>
        <div id='line' className='w-full h-1 border-dashed border-t-4 border-red-600 '> </div>
    </div>

    <div className='h-full w-[700px] '>
        <div className='h-[60%] w-[700px] flex'>
            <div className='w-[40%] h-full '>
                <h1 className='div21-text'>wave artisan shops</h1>
            </div>

            <div className='w-[60%] h-full'>
            <p className='info'>These ice cream shops represent everything that is well and good: new-wave artisan shops challenging the very notion of what should be placed on a cone (or stick, or between cookies), old-school parlors learning…</p><br />
            <a href="" className='underline'>Read More</a>
            </div>
        </div><br/><br/>
        <div id='line' className='w-full h-1 border-dashed border-t-4 border-red-600 '> </div>
        <img className='ml-[550px] -mt-[100px]' src={cup} alt="not found" />
    </div>
       
    </div>

    {/* 3 ice-creame-information */}

    <div className='w-full h-[500px] flex'>

        <div className='w-1/3 h-[500px] overflow-hidden flex justify-center'>
            <p className='absolute mt-28 font-bold text-white z-30'><i className='hello-heading font-Playball'>hello</i><br />
            <p className='text-[55px] -ml-14 leading-tight '>SUMMER!</p></p>
            <img className='w-full h-full hover:scale-110 duration-1000' src={img17} alt="not found" />
        </div>

        <div className='w-1/3 h-[500px] overflow-hidden '>
        <div className='w-[170px] h-[170px] absolute object-cover mt-52 ml-28 z-10' >
            <img className='w-[170px] h-[170px]' src={spin} alt="not found"/>
            <h1 className='z-10 text-[50px] font-bold -mt-[120px] ml-6 text-white'>-30%</h1>
        </div>
            <img className='w-full h-full hover:scale-110 duration-1000' src={img18} alt="not found" />
        </div>


        <div className='w-1/3 h-[500px] overflow-hidden flex justify-center items-center'>
            <p className='absolute font-bold text-white mt-40 z-40'><i className='text-[55px] -ml-14 leading-tight'>CREAMY</i><br />
            <p className='hello-heading'>enjoy</p></p>
            <img className='w-full h-full hover:scale-110 duration-1000' src={img19} alt="not found" />
        </div>
    </div>
    <br /><br />

    {/* Card Slider */}
    <List_Rendering/>

    {/* Home Second Slider */}
    <HomeSecond_slider/>

    {/* 4 ice-cream-flewers */}
    <IceCreamCard/>

    {/* Testies update Cards */}
    <ArticleCard/>

    {/* Footer */}
    <Footer/>
    
    </>
  )
}

export default Home

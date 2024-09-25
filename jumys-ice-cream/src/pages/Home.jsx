import React from 'react'
import Navbar from '../Components/Navbar'
import spin from '../assets/asset 4.svg'
import cup from '../assets/asset 16.png'
import img17 from '../assets/asset 17.jpeg'
import img18 from '../assets/asset 18.jpeg'
import img19 from '../assets/asset 19.jpeg'
import IceCreamCard from '../Components/IcecreamCard'
import ArticleCard from '../Components/ArticalCard'
import Footer from '../Components/Footer'
import HomeSlider1 from '../Components/HomeSlider1'
import HomeSecond_slider from '../Components/HomeSecond_slider'
import List_Renderingg from '../Components/Cards_slider'
import ScrollToTopButton from '../Components/TopButton'

const Home = () => {
  return (
    <>

    {/* Slider 1 */}
    <HomeSlider1/><br /><br />

    {/* Content */}

    <div className=' pl-6 w-full h-auto flex flex-col gap-6 md:gap-10 md:flex-row justify-center '>
       
        <div className='w-full md:w-[700px] h-auto '>
            <div className='flex flex-col md:flex-row h-auto'>
                <div className='w-full md:w-[40%] h-auto'>
                    <h1 className='div2-text  md:text-5xl font-bold'>Best Ice Cream Shops</h1>
                </div>
    
                <div className='w-full md:w-[60%] h-auto'>
                    <p className='info text-base md:text-lg'>It's quite possible that we are living in the golden age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term “chef” </p><br />
                    <a href="" className='underline text-blue-500'>Read More</a>
                </div>
            </div>
            <div className='w-full h-1 border-dashed border-t-4 border-red-600 my-4'> </div>
        </div>
    
        
        <div className='w-full md:w-[700px] h-auto relative'>
            <div className='flex flex-col md:flex-row h-auto'>
                <div className='w-full md:w-[40%] h-auto'>
                    <h1 className='div21-text text-xl md:text-5xl font-bold '>Wave Artisan Shops</h1>
                </div>
    
                <div className='w-full md:w-[60%] h-auto'>
                    <p className='info text-base md:text-lg'>These ice cream shops represent everything that is well and good: new-wave artisan shops challenging the very notion of what should be placed on a cone (or stick, or between cookies), old-school parlors learning…</p><br />
                    <a href="" className='underline text-blue-500'>Read More</a>
                </div>
            </div>
            <div className='w-full h-1 border-dashed border-t-4 border-red-600 my-4'> </div>
            <img className='w-full max-w-[70px] md:max-w-[90px] mb-9 mx-auto md:absolute md:right-4 md:bottom-0 md:translate-x-4 md:translate-y-4 block' src={cup} alt="Ice Cream Cup" />
        </div>
    </div><br /><br />

    

    {/* 3 ice-creame-information */}
    {/* <div className='container m-auto'> */}
    <div className=' w-full h-auto flex px-4' id='topIce'>

        <div className='w-full md:w-1/3 aspect-[1.3] h-auto overflow-hidden flex justify-center' id='IC'>
            {/* <p className='absolute mt-28 font-bold text-white z-30'><i className='hello-heading font-Playball'>hello</i><br />
            <p className='text-[55px] -ml-14 leading-tight '>SUMMER!</p></p> */}
            <img className='w-full h-full hover:scale-110 duration-1000' src={img17} alt="not found" />
        </div>

        <div className='w-full md:w-1/3 aspect-[1.3] h-auto overflow-hidden ' id='IC'>
        {/* <div className='spin-div w-[170px] h-[10px] absolute object-cover z-10' >
            <img className='w-[100px] h-[100px]' src={spin} alt="not found"/>
            <h1 className='z-10 text-[20px] font-bold -mt-[70px] ml-6 text-white'>-30%</h1>
        </div> */}
            <img className='w-full h-full hover:scale-110 duration-1000' src={img18} alt="not found" />
        </div>


        <div className='w-full md:w-1/3 aspect-[1.3] h-auto overflow-hidden flex justify-center items-center' id='IC'>
            {/* <p className='absolute font-bold text-white mt-40 z-40'><i className='text-[55px] -ml-14 leading-tight'>CREAMY</i><br />
            <p className='hello-heading'>enjoy</p></p> */}
            <img className='w-full h-full hover:scale-110 duration-1000' src={img19} alt="not found" />
        </div>
    </div>
    {/* </div> */}

    <div className='w-full h-auto font-bold flex flex-col justify-center items-center mt-12 px-4 sm:px-6 md:px-8 lg:px-12' id='text-card-ice-cream'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center'>
        Best Ice Cream Shops
      </h1>
    </div>


    {/* Demo Slider */}
    <List_Renderingg/><br/> <br /> 
   

    {/* Home Second Slider */}
    <HomeSecond_slider/>

    {/* 4 ice-cream-flewers */}
    <IceCreamCard/>

    {/* Artical Card heading */}
    <div className='w-full h-auto flex flex-col justify-center items-center py-6 sm:py-8 md:py-10 lg:py-12'>
      <p className='Our-news  text-lg sm:text-xl md:text-2xl lg:text-3xl italic font-semibold'>
        Our News
      </p>
      <p className='Tastiest-Updates text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2'>
        Tastiest Updates
      </p>
    </div>

    {/* Testies update Cards */}
    <ArticleCard/> <br /><br />

    {/* Footer */}
    <Footer/>

    {/* Scroll To Top Button */}
    <ScrollToTopButton/>

    </>
  )
}

export default Home

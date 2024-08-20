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
import ProductCard from '../Components/Card'
import item1 from '../assets/asset 20.webp';
import item2 from '../assets/asset 21.webp';
import item3 from '../assets/asset 22.jpeg';
import item4 from '../assets/asset 23.jpeg';
import item5 from '../assets/asset 24.webp';
import item6 from '../assets/asset 25.webp';
import item7 from '../assets/asset 26.webp';
import item8 from '../assets/asset 27.webp';
import item9 from '../assets/asset 28.webp';
import item10 from '../assets/asset 29.webp';
import item11 from '../assets/asset 30.webp';
import item12 from '../assets/asset 31.webp';
import item13 from '../assets/asset 32.webp';
import item14 from '../assets/asset 33.jpeg';
import item15 from '../assets/asset 34.webp';
import item16 from '../assets/asset 35.jpeg';

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

    <div className='w-full h-16 font-bold flex justify-center mt-12 items-center text-[49px]' id='text-card-ice-cream'>
        <h1>Best Ice Cream Shops</h1>
    </div>

    {/* Demo Slider */}
    {/* <List_Renderingg/><br/> <br />  */}
    <ProductCard img1={item1} img2={item2}/>
    <ProductCard img1={item3} img2={item4}/>
    <ProductCard img1={item5} img2={item6}/>
    <ProductCard img1={item7} img2={item8}/>
    <ProductCard img1={item9} img2={item10}/>
    <ProductCard img1={item11} img2={item12}/>
    <ProductCard img1={item13} img2={item14}/>
    <ProductCard img1={item15} img2={item16}/>
    

    {/* Home Second Slider */}
    <HomeSecond_slider/>

    {/* 4 ice-cream-flewers */}
    <IceCreamCard/>

    <div className='w-full h-28 flex flex-col justify-center items-center'>
        <p className='Our-news'><i>Our News</i></p>
        <p className='Tastiest-Updates'>Tastiest Updates</p>
    </div>

    {/* Testies update Cards */}
    <ArticleCard/> <br />

    {/* Footer */}
    <Footer/>

    {/* Scroll To Top Button */}
    <ScrollToTopButton/>

    </>
  )
}

export default Home

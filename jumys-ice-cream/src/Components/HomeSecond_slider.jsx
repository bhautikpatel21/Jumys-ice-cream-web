import React from 'react'
import img1 from '../assets/asset 36.png'
import img2 from '../assets/asset 37.png'
import img3 from '../assets/asset 59.svg'
import img4 from '../assets/asset 60.svg'
import img5 from '../assets/asset 61.svg'
import img6 from '../assets/asset 40.png'
import img7 from '../assets/asset 38.png'
import img8 from '../assets/asset 39.png'
import { FaArrowRight} from 'react-icons/fa';

const HomeSecond_slider = () => {
  return (
  <>
  <div className='w-full overflow-hidden h-[800px] flex  justify-between ' id='Home-slider-main-com'>
    <div className='h-full w-72 pt-52'>
        <img src={img1} alt="not found" className='-ml-28' />
        <img src={img2} alt="not found" />
    </div>

    <div className='h-full w-1/2 justify-center flex flex-col mr-44 ml-12' >
    <h1 className='slider-font'>Make Every Day a Sweet Day</h1><br />
    <p className='text-gray-500'>But incorporating liquor into ice cream seems like nothing when you consider how inventive…</p> <br />
    <div className='w-full h-10 flex items-center font-semibold mb-3 pl-10' id='texed'>
        <img src={img3} alt="not found" /> <span className='ml-7'>Guaranteed frozen delivery</span>
    </div>

    <div className='w-full h-10 flex items-center font-semibold mb-3 pl-10' id='texed'>
        <img src={img4} alt="not found" /> <span className='ml-7'>Guaranteed frozen delivery</span>
    </div>

    <div className='w-full h-10 flex items-center font-semibold pl-10' id='texed'>
        <img src={img5} alt="not found" /> <span className='ml-7'>Guaranteed frozen delivery</span>
    </div><br />

    <button className='ml-10 w-36 h-10 bg-white flex items-center justify-center rounded-full' id='home-slider-button'> View More <FaArrowRight className='ml-2'/></button>

    </div>

    <div className='h-full w-1/2 items-center flex'>
    <img src={img6} alt="not found"/>
    </div>

    <div className='h-full w-96 flex flex-col items-end justify-evenly'>
        <img src={img7} alt="not found" className='-mr-24'/>
        <img src={img8} alt="not found" className='-mr-24' />
    </div>

  </div>  
  </>
  )
}

export default HomeSecond_slider

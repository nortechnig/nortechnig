import React from 'react'
import {Carousel} from '3d-react-carousal';
import bg1 from '../assets/a.jpg';
import bg2 from '../assets/b.jpg';
import bg3 from '../assets/c.jpg';
import bg4 from '../assets/d.jpg';
import bg5 from '../assets/e.jpg';


function Hero() {
  let slides = [
    <img  src={bg1} alt='' />,
    <img  src={bg2} alt='' />  ,
    <img  src={bg3} alt='' />  ,
    <img  src={bg4} alt='' />  ,
    <img src={bg5} alt='' />   ];

   
  return (
    <div className='w-full h-full  md:h-screen flex flex-col justify-between'>
   <div className='mt-32 md:my-36'>
   <Carousel slides={slides} autoplay={true} interval={1000} />
   </div>
  
   </div>
  )
}

export default Hero
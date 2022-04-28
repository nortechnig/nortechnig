import React from 'react'

import im1 from '../assets/e.jpg';
import im2 from '../assets/c.jpg';
import im3 from '../assets/b.jpg';
function Courses() {
  return (
    <div className='w-full my-12'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h3 className='active-section text-2xl md:text-3xl font-bold font-lato text-active border-primary '>Our Programmes</h3>
            </div>
            <div className='grid md:grid-cols-3 gap-2 px-16 md:gap-5 md:px-32 text-center justify-between py-12'>
                <div className='text-center justify-between'>
                    <img src={im1} classname='w-50 h-30' alt='' />
                    <div className='grid md:grid-cols-1 py-2 text-center items-center place-items-center'>
                    <h3 className='text-1xl font-bold font-lato text-active my-6'>Medical Science</h3>
                    <p className='text-secondary text-sm'>sdfghjjkmjnbvcxcsgfbiuytrewasdcvfgbnmnn bvfbvgnjuytrekjmhngfbvxdffguiuytresdxcvb cvbnvcdsfghtrty xcvbnbvfdsgtfr vccbnhgfd vcbfdsehgfd</p>
                    <button className='read-more bg-primary text-light text-xl my-6 px-2 py-1'>Read More</button>
                    </div>
                     </div>
                <div className='text-center justify-between'>
                    <img src={im2} classname='w-50 h-30' alt='' />
                    <div className='grid md:grid-cols-1 py-2 text-center items-center place-items-center'>
                    <h3 className='text-1xl font-bold font-lato text-active my-6'>Nursing</h3>
                    <p className='text-secondary text-sm'>sdfghjjkmjnbvcxcsgfbiuytrewasdcvfgbnmnn bvfbvgnjuytrekjmhngfbvxdffguiuytresdxcvb cvbnvcdsfghtrty xcvbnbvfdsgtfr vccbnhgfd vcbfdsehgfd</p>
                    <button className='read-more bg-primary text-light text-xl my-6 px-2 py-1'>Read More</button>
                    </div>
                </div>
                <div className='text-center justify-between'>
                    <img src={im3} classname='w-50 h-30' alt='' />
                    <div className='grid md:grid-cols-1 py-2 text-center items-center place-items-center'>
                    <h3 className='text-1xl font-bold font-lato text-active my-6'>physiotherapy</h3>
                    <p className='text-secondary text-sm'>sdfghjjkmjnbvcxcsgfbiuytrewasdcvfgbnmnn bvfbvgnjuytrekjmhngfbvxdffguiuytresdxcvb cvbnvcdsfghtrty xcvbnbvfdsgtfr vccbnhgfd vcbfdsehgfd</p>
                    <button className='read-more bg-primary text-light text-xl my-6 px-2 py-1'>Read More</button>
                    </div>
                </div>
            </div>
           
        </div>
        </div>
  )
}

export default Courses
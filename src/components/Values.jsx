import React from 'react'

import { FlagIcon, BookmarkIcon, SunIcon } from '@heroicons/react/outline'
function Values() {
  return (
    <div className='w-full my-12 bg-light'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h3 className='active-section text-2xl py-12 md:py-12 md:text-3xl font-bold font-lato text-active border-primary '>Our Core  Values</h3>
            </div>
            <div className='grid md:grid-cols-3 gap-2 px-6 md:gap-x-30  md:px-36 text-center justify-between py-12'>
                
                <div className='flex flex-col place-items-center text-center'>
            <div className='text-center place-items-center  md:mx-18 w-[50px] h-[50px] rounded-full bg-secondary'>
                <SunIcon className='w-8 md:w-8 py-0 mx-2 mt-2 text-primary' />
                </div>
                    <div className='grid md:grid-cols-1'>
                    <h3 className='text-1xl font-bold font-lato text-active my-4'>Solution</h3>
                    <p className='text-secondary py-2 text-sm'>sdfghjjkmjnbvcxcsgfbiuytrewasdcvfgbnmnn bvfbvgnjuytrekjmhngfbvxdffguiuytresdxcvb cvbnvcdsfghtrty xcvbnbvfdsgtfr vccbnhgfd vcbfdsehgfd</p>
                    </div>
                     </div>

                     <div className='flex flex-col place-items-center text-center'>
            <div className='text-center place-items-center   md:mx-18 w-[50px] h-[50px] rounded-full bg-secondary'>
                <FlagIcon className='w-8 md:w-8 py-0 mx-2 mt-2 text-primary' />
                </div>
                    <div className='grid md:grid-cols-1'>
                    <h3 className='text-1xl font-bold font-lato text-active my-4'>Solution</h3>
                    <p className='text-secondary py-2 text-sm'>sdfghjjkmjnbvcxcsgfbiuytrewasdcvfgbnmnn bvfbvgnjuytrekjmhngfbvxdffguiuytresdxcvb cvbnvcdsfghtrty xcvbnbvfdsgtfr vccbnhgfd vcbfdsehgfd</p>
                    </div>
                     </div>

                     <div className='flex flex-col place-items-center text-center'>
            <div className='text-center place-items-center  md:mx-18 w-[50px] h-[50px] rounded-full bg-secondary'>
                <BookmarkIcon className='w-8 md:w-8 py-0 mx-2 mt-2 text-primary' />
                </div>
                    <div className='grid md:grid-cols-1'>
                    <h3 className='text-1xl font-bold font-lato text-active my-4'>Solution</h3>
                    <p className='text-secondary py-2 text-sm'>sdfghjjkmjnbvcxcsgfbiuytrewasdcvfgbnmnn bvfbvgnjuytrekjmhngfbvxdffguiuytresdxcvb cvbnvcdsfghtrty xcvbnbvfdsgtfr vccbnhgfd vcbfdsehgfd</p>
                    </div>
                     </div>

            </div>
           
        </div>
        </div>
  )
}

export default Values
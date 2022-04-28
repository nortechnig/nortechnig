import React from 'react'
import bgImg from '../assets/ccc.jpg';
import { PlayIcon } from '@heroicons/react/solid';
function High() {
  return (
    <div className='w-full h-screen mt-24'>
        <div className='w-full h-[500px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={bgImg} alt='' />
        </div>
        <div className='max-w-[1240px] mx-auto text-light relative font-lato'>
            <div className='text-center place-items-center'>
             <h3 className='font-bold text-3xl pt-48'>School Highlight</h3>
             <p className='font-lato text-xl pt-6'>A show reel of Evergreen college of health science and technology Dutse</p>
             <div className='bg-primary w-[80px] h-[80px] rounded-full mx-auto mt-5 shadow-2xl place-items-center'>
             <div className='p-2'>
             <PlayIcon className='w-16  text-light' /> 
             </div>
                 </div>  
            </div>
        </div>
    </div>
  )
}

export default High
import React from 'react'

import {
    FaFacebook,
    FaYoutube,
    FaPhone,
    FaLinkedinIn,
    FaTwitter
} from 'react-icons/fa'
function Footer() {
  return (
    <div className='w-full h-[250px] mt-24 bg-light'>
    <div className='max-w-[1240px] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-6 md:gap-8'>
            <div className='col-span-2 text center mx-auto  md:my-36'>
                <h3 className='md:text-4xl text-3xl md:mb-6 text-bold text-primary uppercase'>Ecotec</h3>
                <p className='text-sm text-secondary'>cvbnmngfhj retyuiuyttrrety cvbnmnb hjgffdgh uytrty</p>
                <div className='my-12 place-items-center text-center'>
                    <div className='grid grid-cols-5 grid-row-1 md:grid-cols-5 gap-4 px-6'>
                        
                        <FaFacebook className='text-primary ' />
                        <FaPhone className='text-primary ' />
                        <FaLinkedinIn className='text-primary' />
                        <FaTwitter className='text-primary' />
                        <FaYoutube className='text-primary' />
                     </div>
                </div>
            </div>
            <div className=' col-span-2 text-center mx-auto md:my-36'>
                <p className='md:text-2xl text-xl text-bold text-active'>Programs</p>
               <ul>
                   <li>Program 1</li>
                   <li>Program 2</li>
                   <li>Program 3</li>
                   <li>Program 4</li>
                   </ul>
            </div>
            <div className='text center mx-auto md:my-36'>
                <p className='md:text-2xl text-xl ml-4 mt-8 text-bold text-active'>Resources</p>
                <ul>
                   <li>Program 1</li>
                   <li>Program 2</li>
                   <li>Program 3</li>
                   <li>Program 4</li>
                   </ul>
            </div>
            
        </div>
        <div className='w-full h-[30px]  bg-primary text-light text-center'>
            <div className='text-white text-center'>
                <p className='py-2'>Ecotec &copy; 2022.</p>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Footer
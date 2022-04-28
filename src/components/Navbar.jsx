import React, { useState } from 'react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
function Navbar() {
  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className='w-screen h-[50px] md:h-[80px] font-lato z-10 bg-section/75 fixed'>
      <div className='navbar px-2 flex jusitfy-between items-center py-4 w-full h-full'>
        <div className='container flex justify-between items-center mx-auto'>
          <h1 className='text-1xl ml-4 mt-8 font-bold text-primary md:ml-8 md:text-2xl'>Ecotec</h1>
            <ul className='hidden md:flex'>
            <li className='active text-active'>Home</li>
            <li className='active active-left'>Programmes</li>
            <li className='active active-left'>About</li>
             <li className='active active-left'>Notifications</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-primary text-light text-sm py-2 px-3 mr-4'>Contact</button>
        </div>
        <div className='md:hidden' onClick={handleClick}>
        {!nav ? <MenuAlt1Icon className='w-5 mr-4 mt-8' /> : <XIcon className='w-5' />}
        </div>

        </div>

       <ul className={!nav ? 'hidden' : 'absolute bg-section/75 w-full  px-8'}>
         <li className='border-b-2 w-full text-active'>Home</li>
         <li className='border-b-2 w-full '>Programmes</li>
         <li className='border-b-2 w-full '>About</li>
         <li className='border-b-2 w-full '>Notifications</li>
         <div className='flex flex-col my-4'>
         <button className='bg-transparent text-primary px-8 py-3 mb-4'>Contact</button>
       </div>
         </ul> 
      
    </div>
  )
}

export default Navbar
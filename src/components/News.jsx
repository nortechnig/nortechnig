import React from 'react'

function News() {
  return (
    <div className='w-full h-[250px] mt-24'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center px-12'>
                <h3 className='text-2xl md:py-8 md:text-3xl font-bold font-lato text-active'>NewsLetter</h3>
                <p className='text-active text-sm md:text-lg'>ffghkmnb vccxvcv bnmuytre sfsesrtyikhn bvvcxcxvb dfguyy vbgffh </p>
            </div>

    <div className='container max-w-[1240px] mx-auto md:ml-32 place-items-center px-12  md:px-48'>
        <form className='mb-0 space-y-6' action='#' method=''>
        <div className='grid grid-cols-1 gap-4 md:gap-4  md:grid-cols-2 md:gap-2 my-12 md:my-12'>
            <div className='flex md:ml-12'>
            <input autoComplete='email' required type='email' className='md:w-full px-6 py-2 md:py-2 md:px-2 border rounded-xl text-active focus:outline-none focus:border-primary shadow-lg' placeholder='Your Email' />
            </div>
            <div className='flex mx'>
            <button className='md:w-[100px] w-full px-0 py-2 md:py-2 md:px-4 font-lato text-light  border rounded-xl'>Subscribe</button>
            </div>
            </div>
        </form>
    </div>
    </div>
    </div>

      
  )
}

export default News
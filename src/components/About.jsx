import React from 'react'
import bgImg  from '../assets/nurse.png'
function About() {
  return (
    <div className='container-fluid bg-light font-lato flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 my-36'>
            <div className='flex flex-col justify-center md:items-start w-full  px-2 py-8'>
                <h1 className='text-3xl md:text-5xl ml-12 text-primary font-bold'>Evergreen college of Health Science and Technology, DUtse</h1>
               <p className='text-active text-1xl md:text-2xl my-6 ml-12'>lorem fgfgnjg dfvngfrtueg vdvnfdghtruehure fdgeru7thvscnvn vjfsdkghrethuvnsdc</p>
            </div>
            <div className=''>
            <img src={bgImg} alt ='' className='w-50 h-30'/>
            </div>
        </div>
        </div>
  )
}

export default About
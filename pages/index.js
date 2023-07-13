import React from 'react'
import Navbar from '../components/Navbar'
import Card1 from '@/components/Card1'
import Card2 from '@/components/Card2'
import Card3 from '@/components/Card3'


const index = () => {
  return (
    <div className='h-full max-w-full gap-6 mx-auto bg-white'
   
    >
    <Navbar/>
    <div className='flex  font-bold text-2xl mx-auto  text-center justify-center mt-8'>
          <span id='' className=" border-b-4 border-black ml-4">ABOUT ME</span>
          <span id='' className="ml-6 border-b-4 border-black">PROJECT</span>
          <span id='' className=" border-b-4 border-black ml-6"> PROFILE</span>
          <span id='' className=" border-b-4 border-black ml-6">CERTIFICATIONS</span>
        </div>
      <div className='text-black gap-2 pt-8 ml-10 flex mt-10'>
     <h1 className='md:text-7xl text-3xl font-serif '> DRIVEN</h1>
     <h1> AND </h1>
     <h1 className='md:text-7xl text-3xl font-serif'> DEDICATED </h1> 
      </div>
      <div className='text-black ml-24 font-sans text-3xl   '>
        <h1 className=''>professional with a passion for delivering exceptional results.</h1>
        </div>
        
        <div className='  grid grid-cols-3 gap-6 ml-10 mt-4 bg-white h-80 mr-10 '> 
        <Card1/>
        <Card2/>
        <img src='gif4.gif' className=' md:-mt-20'/>
        </div>

       
       
    </div>
  )
}

export default index

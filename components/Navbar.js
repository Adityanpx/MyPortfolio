import React from 'react'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
export default function Navbar() {
  return (
    <header className=' bg-[#222222]  border-b-2 border-white flex justify-between mx-auto'> 
<div className='flex '>
  <img src='logo2new.png' className='object-contain w-44'/>
  <div className=' items-center flex text-5xl font-serif  text-white space-x-5'>
     <h1 > ADITYA </h1>
     <div className=' text-end'><h1 className=' text-xl'> As Always</h1></div>
     <h1> </h1>
     <div>
     
     </div>

  </div>
</div>

<img src='gif1.gf' className=''/>
<div className='flex '>
<BsLinkedin className='text-white text-4xl mt-14 mr-4'/>
<FiInstagram className='text-white text-4xl mt-14 mr-4'/>
<FaGithub className='text-white text-4xl mt-14 mr-10 '/>
</div>

    </header>
  )
}

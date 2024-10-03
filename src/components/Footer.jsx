import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*------------left-----*/}
        <div>
         <img className='mb-5 w-40'src={assets.logo} alt="" />
         <p className='w-full md:w-2/3 text-gray-600 leading-6'>description</p>
        </div>
        {/*-------center------*/}

        <div>
           <p className='text-xl font-medium mb-5'>COMPANY</p>
           <ul className='flex flex-col gap-2 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>PRIVACY POLICY</li>
           </ul>
        </div>
        {/*-------right-------*/}
        <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-1234567890</li>
            <li>ROHITSA@GMAIL.COM</li>
        </ul>
        </div>
       </div>
       {/*----------copyright------------*/}
       <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@Doctors-All Right Reserved.</p>
       </div>
    </div>
    
  )
}

export default Footer

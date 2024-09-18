import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-48 text-sm'>
        {/* ......left section */}
        <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a great platformt  for great work of doctors and others came toghter that is thus hellps patients from everywhere to engage with people like doctors for anything suitable fot them and for it</p>
        </div>

            {/* ......center section */}
        <div >
          <p className='text-xl font-medium mb-5'> COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
            <li>PRIVACY POLICY</li>
          </ul>
          </div>  

          {/* ......right section */}
          <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-6238435808</li>
            <li>vasudavesatheesh@gmail.com</li>
          </ul>
          </div>
        
      </div>
      <div>

        {/* .....copyrighttext */}
      </div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto . All Right Reserved.</p>
    </div>
  )
}

export default Footer

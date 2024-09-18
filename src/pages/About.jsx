import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT  <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700'>
          <p>Welcome to prescripto a great viewing experience for the fundamental building of the great application about the doctors appointmenet and other significant things for the main purpose for the patients and others blah blah</p>
          <p>Also a great applictation for anyone who know anything or know nothing or know nooo know any thing but also but not good</p><b className='text-gray-900'>Our vision</b>
          <p>We have no vision this is just a about page and these are dummy text made by me.sayanora</p>
        </div>
      </div>
      <div>
        <p className='text-xl my-4'>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY</b>
          <p>appointment schedule is high so it will fit into your life style</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVIENENCE</b>
          <p>access via network is simple and effective to anyone from anywhere</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONILIZATION</b>
          <p>the recommendations are simple and great therefore anyone can simply understand it</p>
        </div>
      </div>
    </div>
  )
}

export default About

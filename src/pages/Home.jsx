import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/specialityMenu'
import Topdoctors from '../components/Topdoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <Topdoctors/>
      <Banner/>
    </div>
  )
}

export default Home

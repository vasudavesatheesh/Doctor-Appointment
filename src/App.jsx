import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'
import About from './pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[8%]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/doctors/:speciality' element={<Doctors/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/myprofile' element={<Myprofile/>}></Route>
        <Route path='/myappointments' element={<MyAppointments/>}></Route>
        <Route path='/appointment/:docId' element={<Appointment/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App


import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/Appcontext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {

  const{docId}=useParams()
  const{doctors,currencySymbol}=useContext(AppContext)
  const daysofweeks = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const[docInfo,setDocInfo]=useState(null)
  const [docslots,setDocslots]=useState([])
  const[slotindex,setSlotindex]=useState(0)
  const[slottime,setSlottime]=useState('')

 const fetchDocInfo=async()=>{
  const docInfo=doctors.find(doc =>doc._id===docId)
  setDocInfo(docInfo)
 
 }

const getAvailableslots=async()=>{
   setDocslots([])
  //  getting current date

  let today = new Date()
  for(let i=0;i<7;i++){
    //getting date with index
    let currentDate=new Date(today)
    currentDate.setDate(today.getDate()+i)
    //setting ending time of the date with index
    let endTime=new Date()
    endTime.setDate(today.getDate()+i)
    endTime.setHours(21,0,0,0)
    //setting hours
   if (today.getDate()===currentDate.getDate()) {
    currentDate.setHours(currentDate.getHours()>10?currentDate.getHours()+1:10)
    currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
   } 
   else{
    currentDate.setHours(10)
    currentDate.setMinutes(0)
  }

  let timeslots=[]
  while(currentDate<endTime){
    let formattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit' ,minute:'2-digit'})
         //add slot to array
         timeslots.push({
          datetime: new Date(currentDate),
          time:formattedTime
         })

         //increment curent time by 30min
         currentDate.setMinutes(currentDate.getMinutes() + 30)
  }
  setDocslots(prev=>([...prev, timeslots]))
  }
}

 useEffect(()=>{
   fetchDocInfo()
 },doctors,docId)



 useEffect(()=>{
getAvailableslots()
 },[docInfo])

 useEffect(()=>{
  console.log(docslots);
  
 },[docslots])

  return docInfo && (
    <div>
        {/* ...........doctor details............. */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
              <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
          </div>
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
                  {/* ...................doc info name degree */}
                  <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
                    {docInfo.name}  
                    <img className='w-5' src={assets.verified_icon} alt="" />
                    </p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                      <p>{docInfo.degree} - {docInfo.speciality}</p>
                      <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>


                    {/* .................doctor about display......... */}
                    <div>
                      <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About  <img src={assets.info_icon} alt="" /></p>
                      <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>

                    <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
          </div>
        </div>

        {/* Booking slots */}
        <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
             <p>BOOKING SLOTS</p>
             <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
              {
                docslots.length && docslots.map((item,index)=>(
                  <div onClick={()=>setSlotindex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? 'bg-primary text-white':'border border-gray-500'}`} key={index}>
                            <p>{item[0] && daysofweeks[item[0].datetime.getDay()]}</p>
                            <p>{item[0] && item[0].datetime.getDate()}</p>

                  </div>
                ))
              }
             </div>
             <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
              {docslots.length && docslots[slotindex].map((item,index)=>(
                <p onClick={()=>setSlottime(item.time)} className={`text-small font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slottime?'bg-primary text-white':'text-gray-400 border border-gray-400'}`} key={index}>

                  {item.time.toLowerCase()}
                </p>
              ))}
             </div>
             <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>
        </div>
        {/* ................listing related doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment

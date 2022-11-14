import React from 'react'
import { appImages } from './picData'
import Star from './images/Frame 59528.png'

const Main2 = () => {
  return (
    <div className='w-full mt-5'>
      <div className='w-10/12  mx-auto '>
        <div className=' w-full mx-auto my-10 p-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 md:grid-rows-4 lg:grid-cols-4  lg:grid-rows-2'>
        {appImages.map((app)=>{
          return(
            <div className='flex flex-row justify-between w-full '>
            <div className=' w-80 border border-card-grey rounded-2xl mx-auto'>
            <img src={app.appImage} key={app.id} className='w-64 p-4 mx-auto' alt='mainImage'/>
            <div className='w-full p-3'>
            <div className='flex flex-row justify-between text-card-black text-sm tracking-wide'><span>Desert king</span><span>1MBT per night</span></div>
            <div className=' w-full flex flex-row justify-between text-card-black text-sm my-6 gap-5'><span className=''>2345km away</span><span>available for two weeks stay</span></div>
            <img src={Star} alt='star'/>
            </div>
            </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default Main2
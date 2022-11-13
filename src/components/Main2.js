import React from 'react'
import { appImages } from './picData'
import Star from './images/Frame 59528.png'

const Main2 = () => {
  return (
    <div className='w-full mt-5'>
      <div className='w-10/12  mx-auto '>
      
        <h2 className='font-Rose text-5xl font-bold text-center mx-auto pt-10 pb-11'>
        Inspiration for your next adventure
        </h2>
          
       
        <div className=' w-full grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 md:grid-rows-8 lg:grid-cols-4 lg:gap-6 lg:grid-rows-4'>
        {appImages.map((app)=>{
          return(
            <div className='mx-auto  border border-card-grey rounded-2xl'>
            <img src={app.appImage} key={app.id} className='w-64 p-4' alt='mainImage'/>
            <div className='w-60 p-3'>
            <div className='flex flex-row justify-between'><span>Desert king</span><span>1MBT per night</span></div>
            <div className='flex flex-row justify-between'><span>2345km away</span><span>available for two weeks stay</span></div>
            <img src={Star} alt='star'/>
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
import React from 'react'

const Navbar2 = () => {
  return (
    <div className='w-full mt-5'>
        <div className='w-10/12  mx-auto flex flex-row justify-between'>
            <ul className='w-9/12 flex flex-row justify-between text-sm leading-tight'>
            <li className='m-2'>Restaurant</li>
            <li className='m-2'>Cottage</li>
            <li className='m-2'>Castle</li>
            <li className='m-2'>Fantast city</li>
            <li className='m-2'>Beach</li>
            <li className='m-2'>Carbins</li>
            <li className='m-2'>Off-grid</li>
            <li className='my-2'>Farm</li>
            </ul>
            <div className='m-2'>
                <input placeholder='Location'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar2
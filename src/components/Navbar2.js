import React from 'react'

const Navbar2 = () => {
  return (
    <div className='w-full mt-5'>
        <div className='w-10/12  mx-auto flex flex-row justify-between'>
            <ul className='w-9/12 flex flex-row justify-between'>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantast city</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            </ul>
            <div>
                <input placeholder='Location'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar2
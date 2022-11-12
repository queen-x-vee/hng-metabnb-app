import React from 'react'
import Banner from '../components/Banner'
import Main from '../components/Main'
import Main2 from '../components/Main2'
import Main3 from '../components/Main3'
import Navbar from '../components/Navbar'

const Page1 = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Banner/>
        <Main2/>
        <Main3/>
    </div>
  )
}

export default Page1
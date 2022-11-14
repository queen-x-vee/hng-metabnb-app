
import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Main3 from '../components/Main3'
import MainHero from '../components/MainHero'
import Navbar from '../components/Modal/Navbar'

const Page1 = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Banner/>
        <MainHero/>
        <Main3/>
        <Footer/>
    </div>
  )
}

export default Page1
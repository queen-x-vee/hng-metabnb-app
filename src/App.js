import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

const App = () => {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Page1/>}/>
      <Route  path='/places' element={<Page2/>}/>
    </Routes>
    </>
  )
}

export default App
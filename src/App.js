import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Page1 from './pages/Page1'

const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Page1/>}/>
    </Routes>
    </>
  )
}

export default App
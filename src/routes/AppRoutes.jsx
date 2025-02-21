import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from '../pages/LoginSignup'
import InformationForm from '../pages/InformationForm'


function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/information' element={<InformationForm />} />
    </Routes>
    
  )
}

export default AppRoutes
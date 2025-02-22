import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginSignup from '../pages/LoginSignup'
import SelectRole from '../pages/SelectRole'
import StudentForm from '../pages/StudentForm'
import GraduateForm from '../pages/GraduateForm'


function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/select-role' element={<SelectRole />} />
        <Route path='/student-form' element={<StudentForm />} />
        <Route path='/graduate-form' element={<GraduateForm />} />
    </Routes>
    
  )
}

export default AppRoutes
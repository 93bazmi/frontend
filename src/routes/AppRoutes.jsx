import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from '../pages/LoginSignup';
import SelectRole from '../pages/SelectRole';
import StudentForm from '../pages/StudentForm';
import GraduateForm from '../pages/GraduateForm';
import Dashboard from '../pages/dashboard';

import ProfileNavbar from '../components/ui/ProfileNavbar';

// Layout สำหรับ Navbar 
function ProfileLayout({ children }) {
  return (
    <div className="flex">
      <ProfileNavbar /> 
      <div className="flex-1 p-4">{children}</div> 
    </div>
  );
}


function AppRoutes() {
  return (
    <Routes>
      {/* ไม่มี Navbar */}
      <Route path="/" element={<LoginSignup />} />
      <Route path="/select-role" element={<SelectRole />} />
      <Route path="/graduate-form" element={<GraduateForm />} />
      <Route path='/student-form' element={<StudentForm />} />

      {/* ใช้ ProfileNavbar */}
      <Route path="/dashboard" element={<ProfileLayout><Dashboard /></ProfileLayout>} />



    </Routes>
  );
}

export default AppRoutes;

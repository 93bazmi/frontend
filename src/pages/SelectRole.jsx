import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/selectRole.css'
function SelectRole() {

    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole); // ตั้งค่า Role ที่เลือก
        if (selectedRole === 'student') {
          navigate('/student-form');
        } else if (selectedRole === 'graded') {
          navigate('/graduate-form');
        }
    };


  return (
    <div  style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Select Your Role</h2>
      <div>
        <button style={buttonStyle} onClick={() => handleRoleSelection('student')}>
          Student
        </button>
        <button style={buttonStyle} onClick={() => handleRoleSelection('graded')}>
          Graduate
        </button>
      </div>
    </div>
  )
}

// สไตล์สำหรับปุ่ม
const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

export default SelectRole
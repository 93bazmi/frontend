import React, { useState } from 'react'
import '../styles/StudentForm.css'

function StudentForm() {

    const [activeTab, setActiveTab] = useState("personal"); // ใช้ state เพื่อจัดการแท็บที่เลือก
  
    const handleTabChange = (tab) => {
      setActiveTab(tab); // เมื่อคลิกที่แท็บ เปลี่ยนค่า state ให้แสดงข้อมูลที่เลือก
    };

  return (
    <div>
        <h2>Student Form</h2>

        {/* แถบ Navbar */}
      <div className="navbar">
        <button onClick={() => handleTabChange("personal")}>
          Personal
        </button>
        <button onClick={() => handleTabChange("academic")}>
          Academic
        </button>
      </div>

      <div className="form-content">
                {activeTab === "personal" && (
                    <div>
                        <h2>Personal Information</h2>
                        <h3>
                            <label>First Name:</label>
                            <input type="text" name="firstName" />
                        </h3>

                        <h3>
                            <label>Last Name:</label>
                            <input type="text" name="LastName" />
                        </h3>

                        <h3>
                            <label>Student Code:</label>
                            <input type="text" name="StudentCode" />
                        </h3>

                        <h4>Gender:
                            <label className="ms-3">
                                <input type="radio" name="gender" value="male" /> Male
                            </label>
                            <label className="ms-3">
                                <input type="radio" name="gender" value="female" /> Female
                            </label>
                        </h4>

                        <h4>Date of Birth:
                            <input type="date" />
                        </h4>

                        <h4>Email:
                            <input type="text" />
                        </h4>

                        <h4>Phone Number:
                            <input type="text" />
                        </h4>
                    </div>
                )}

                {activeTab === "academic" && (
                    <div>
                        <h2>Academic Information</h2>
                        <h3>
                            <label>Faculty:</label>
                            <input type="text" name="faculty" />
                        </h3>

                        <h3>
                            <label>Major:</label>
                            <input type="text" name="major" />
                        </h3>

                        <h4>Year of Enrollment:
                            <input type="date" />
                        </h4>

                        <h3>
                            <label>Current Academic Year:</label>
                            <input type="text" name="CurrentAcademicYear" />
                        </h3>

                        <h3><label>Extracurricular Activities:</label></h3>
                        <input type="text" name="Activities" />

                        <h3><label>Academic Projects & Research Work:</label></h3>
                        <input type="text" name="ProjectANDResearch" />
                    </div>
                )}

        </div>
    </div>
  )
}

export default StudentForm
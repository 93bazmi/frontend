import React, { useState } from 'react';
import '../styles/GraduateForm.css';

function GraduateForm() {
    const [activeTab, setActiveTab] = useState("personal");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <h1>Graduate Form</h1>

            {/* Navbar */}
            <div className="navbar">
                <button onClick={() => handleTabChange("personal")}>
                    Personal
                </button>
                <button onClick={() => handleTabChange("academic")}>
                    Academic
                </button>
                <button onClick={() => handleTabChange("internship")}>
                    Internship
                </button>
                <button onClick={() => handleTabChange("career")}>
                    Career
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

                {activeTab === "internship" && (
                    <div>
                        <h2>Internship Experience</h2>
                        <label className="ms-3">
                            <input type="radio" name="InternStatus" /> Internship Completed
                        </label>
                        <label className="ms-3">
                            <input type="radio" name="InternStatus" /> No Internship Experience
                        </label>

                        <h3>
                            <label>Company / Organization for Internship:</label>
                            <input type="text" name="company" />
                        </h3>

                        <h3>
                            <label>Internship Position:</label>
                            <input type="text" name="InternPosition" />
                        </h3>

                        <h3>
                            <label>Internship Duration:</label>
                            <input type="text" name="InternDuration" />
                        </h3>

                        <h3>
                            <label>Responsibilities and Tasks:</label>
                            <input type="text" name="responsibility" />
                        </h3>

                        <h3><label>Feedback on Internship Experience:</label></h3>
                        <input type="text" name="feedback" />
                    </div>
                )}

                {activeTab === "career" && (
                    <div>
                        <h2>Career Information</h2>
                        <h4>Employment Status:</h4>
                        <label className="ms-3">
                            <input type="radio" name="EmploymentStatus" /> Employed
                        </label>
                        <label className="ms-3">
                            <input type="radio" name="EmploymentStatus" /> Pursuing Further Education
                        </label>
                        <label className="ms-3">
                            <input type="radio" name="EmploymentStatus" /> Employed
                        </label>

                        <h3>
                            <label>Company / Organization Name:</label>
                            <input type="text" name="WorkCompany" />
                        </h3>

                        <h3>
                            <label>Job Position:</label>
                            <input type="text" name="JobPosition" />
                        </h3>

                        <h4>Employment Start Date:
                            <input type="date" />
                        </h4>

                        <h3><label>Job Satisfaction:</label></h3>
                        <input type="text" name="satisfaction" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GraduateForm;

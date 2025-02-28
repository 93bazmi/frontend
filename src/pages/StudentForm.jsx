import React, { useState } from 'react';
import StudentNavbar from '../components/ui/StudentNavbar'; // Import FormNavbar
import { useNavigate } from "react-router-dom";

function StudentForm() {
    const [activeTab, setActiveTab] = useState("personal");
    const [internStatus, setInternStatus] = useState("");
    const [careerStatus, setCareerStatus] = useState("");

    const navigate = useNavigate();

    const handleStatusChange = (e) => {
        setInternStatus(e.target.value);
        setCareerStatus(e.target.value);
    };

    return (
        <div className="flex bg-[#FEEDED]">
            <StudentNavbar activeTab={activeTab} onTabChange={setActiveTab} />
            {/* Main Form Content */}
            <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                    Please Enter Your Information
                </h1>
                
                {activeTab === "personal" && (
                    <>
                        <h2 className="text-xl font-medium text-gray-700 mb-6">Personal Information</h2>
                        <form className="space-y-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    placeholder="Enter your first name"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    placeholder="Enter your last name"
                                />
                            </div>

                            {/* Student Code */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Student Code</label>
                                <input
                                    type="text"
                                    name="studentCode"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    placeholder="Enter your student code"
                                />
                            </div>

                            {/* Gender Selection */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Gender</label>
                                <div className="flex items-center gap-6 mt-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="gender" value="male" className="accent-[#b24e50]" />
                                        <span>Male</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="gender" value="female" className="accent-[#b24e50]" />
                                        <span>Female</span>
                                    </label>
                                </div>
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
                                <div className="flex gap-2 mt-2">
                                    <select
                                        name="day"
                                        className="w-1/3 p-4 rounded-lg border border-gray-300 bg-white text-center focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    >
                                        <option value="">Day</option>
                                        {[...Array(31)].map((_, index) => (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        ))}
                                    </select>

                                    <select
                                        name="month"
                                        className="w-1/3 p-4 rounded-lg border border-gray-300 bg-white text-center focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    >
                                        <option value="">Month</option>
                                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                                            <option key={index} value={index + 1}>{month}</option>
                                        ))}
                                    </select>

                                    <select
                                        name="year"
                                        className="w-1/3 p-4 rounded-lg border border-gray-300 bg-white text-center focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    >
                                        <option value="">Year</option>
                                        {[...Array(100)].map((_, index) => (
                                            <option key={index} value={new Date().getFullYear() - index}>{new Date().getFullYear() - index}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-[#b24e50] focus:outline-none"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </form>

                        <div className="mt-6 flex justify-end">
                            <button
                            className="px-8 py-3 bg-[#b24e50] text-white font-semibold rounded-lg shadow-md hover:bg-[#a35f5f] focus:outline-none focus:ring-2 focus:ring-[#b24e50d3] focus:ring-opacity-50 cursor-pointer"
                            onClick={() => setActiveTab("academic")}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}

                {activeTab === "academic" && (
                    <>
                        <h2 className="text-xl font-medium text-gray-700 mb-6 ">Academic Information</h2>
                        <form className="space-y-6">

                            {/* Faculty */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Faculty</label>
                                <input
                                    type="text"
                                    name="faculty"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    placeholder="Enter your faculty"
                                />
                            </div>

                            {/* Major */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Major</label>
                                <input
                                    type="text"
                                    name="major"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    placeholder="Enter your major"
                                />
                            </div>

                            {/* Year of Enrollment */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Year of Enrollment</label>
                                <div className="flex gap-2 mt-2">
                                    <select
                                        name="day"
                                        className="w-1/3 p-4 rounded-lg border border-gray-300 bg-white text-center focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    >
                                        <option value="">Day</option>
                                        {[...Array(31)].map((_, index) => (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        ))}
                                    </select>

                                    <select
                                        name="month"
                                        className="w-1/3 p-4 rounded-lg border border-gray-300 bg-white text-center focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    >
                                        <option value="">Month</option>
                                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                                            <option key={index} value={index + 1}>{month}</option>
                                        ))}
                                    </select>

                                    <select
                                        name="year"
                                        className="w-1/3 p-4 rounded-lg border border-gray-300 bg-white text-center focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    >
                                        <option value="">Year</option>
                                        {[...Array(100)].map((_, index) => (
                                            <option key={index} value={new Date().getFullYear() - index}>{new Date().getFullYear() - index}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Current Academic Year */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Current Academic Year</label>
                                <input
                                    type="text"
                                    name="current_ademic_year"
                                    className="w-full p-4 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    placeholder="Enter your current academic year"
                                />
                            </div>

                            {/* Extracurricular Activities */}
                            <div>
                                <label className="block text-gray-700 font-medium ">Extracurricular Activities</label>
                                <p className="text-gray-600 text-sm mb-2">( Clubs, Student Union, Academic Events, Sports, etc. )</p>
                                <input
                                    type="text"
                                    name="extracural_activities"
                                    className="w-full pt-4 pl-4 py-20 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    placeholder="Enter your extracurricular activities . . ."
                                />
                            </div>

                            {/* Academic Projects & Research Work */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Academic Projects & Research Work</label>
                                <input
                                    type="text"
                                    name="project_and_research"
                                    className="w-full pt-4 pl-4 py-20 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-rose-500 focus:outline-none"
                                    placeholder="Enter your academic projects & research work . . ."
                                />
                            </div>
                        </form>

                        <div className="mt-6 flex justify-center items-center">
                            <button className="px-8 py-3 bg-[#b24e50] text-white font-semibold rounded-lg shadow-md hover:bg-[#a35f5f] focus:outline-none focus:ring-2 focus:ring-[#b24e50d3] focus:ring-opacity-50 cursor-pointer"
                            onClick={() => navigate("/dashboard")}>
                                Submit
                            </button>
                        </div>
                    </>
                )}

                

            </div>
        </div>
    );
}

export default StudentForm;

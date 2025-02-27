import React from "react";
import { useNavigate } from "react-router-dom";

function InfoCard({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/faculties/${item.faculty}/members/${item.id}`, { state: { item } }); // ✅ ไปตามโครงสร้างที่ Route กำหนด
  };
  

  return (
    <div
      className="bg-white p-4 rounded-2xl shadow-md text-center cursor-pointer hover:shadow-lg transition duration-300"
      onClick={handleClick}
    >
      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <h2 className="text-lg font-semibold">{item.firstname} {item.lastname}</h2>
      <p className="text-gray-600">{item.careerPosition} @ {item.careerCompany}</p>
      <p className="text-gray-800 font-medium">{item.faculty}</p>
    </div>
  );
}

export default InfoCard;

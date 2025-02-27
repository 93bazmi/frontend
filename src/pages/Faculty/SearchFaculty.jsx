import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import mockData from "../../components/ui/mockData.jsx";
import SearchCard from "../../components/ui/SearchCard.jsx";

function FacultySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ดึงเฉพาะคณะ (ไม่ซ้ำกัน)
  const faculties = [...new Set(mockData.map(item => item.faculty))];

  // กรองคณะตามคำค้นหา
  const filteredFaculties = faculties.filter(faculty =>
    faculty.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  // Handler for Search icon click
  const handleSearchClick = () => {
    // Trigger the filtering manually when the icon is clicked
    setSearchTerm(searchTerm.trim());
  };

  return (
    <div className="p-4">
      <div className="mt-4 mb-10 flex items-center border rounded-lg p-2 w-3/5 mx-auto">
        <input
          type="text"
          placeholder="Search faculty..."
          className="w-full p-2 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className="text-gray-500 ml-2 cursor-pointer"
          onClick={handleSearchClick} // Add onClick to trigger search
        />
      </div>

      <div className="ml-16 mr-16">
      <h1 className="text-xl font-bold">Select Faculty</h1>

      <div className="mt-4 flex flex-col gap-4">
        {filteredFaculties.length > 0 ? (
          filteredFaculties.map((faculty, index) => (
            <SearchCard 
              key={index} 
              item={{ faculty }}
              type="faculty" 
              onClick={() => navigate(`/faculties/${faculty}`)} // ไปยังหน้ารายชื่อ
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No faculties found.</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default FacultySearch;

import { User, Menu, ChevronLeft } from 'lucide-react'
import React, { useState } from 'react'

function ProfileNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false) // เก็บสถานะพับ/ขยาย Sidebar

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
            isCollapsed ? 'w-16' : 'w-64 md:w-72 lg:w-80 xl:w-96'
          } flex flex-col shrink-0 transition-all duration-300 bg-white shadow-lg`}
      >
        {/* Profile Header - ปุ่มพับอยู่ข้างๆ User */}
        <div className="bg-red-600 p-4 text-white flex items-center justify-between">
          {/* Profile Info */}
          {!isCollapsed && (
            <div className="flex items-center">
              <div className="relative w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-white">
                <User size={24} className="text-gray-400" />
              </div>
              <div className="ml-3">
                <div className="text-lg font-bold">Name Name</div>
                <div className="text-sm">คณะ</div>
                <div className="text-sm">สาขา</div>
              </div>
            </div>
          )}

          {/* ปุ่มพับ Sidebar */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all"
          >
            {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation menu */}
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          {[
            'แก้ไขโปรไฟล์',
            'ค้นหาจากคณะ/สาขา',
            'ค้นหาจากบริษัท',
            'ค้นหาจากสถานงาน',
          ].map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-4 px-4 hover:bg-gray-200 flex items-center"
            >
              {isCollapsed ? (
                <div className="w-full text-center">📌</div> // ไอคอนแทนข้อความตอนย่อ
              ) : (
                item
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      {/* <div className="flex-1 bg-pink-50 p-4">Main Content</div> */}
    </div>
  )
}

export default ProfileNavbar

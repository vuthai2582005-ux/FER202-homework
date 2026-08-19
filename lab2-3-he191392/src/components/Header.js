import React, { createContext } from 'react';
import { CiLight, CiDark } from "react-icons/ci";

const ThemeContext = createContext("Light");

function Header({ theme, setTheme }) {
  return (
    <div className='ms-2'>
        <ThemeContext.Provider value={{ theme, setTheme }}>
              {/* Component con sẽ sử dụng context */}
              <div className='d-flex justify-content-between align-items-center p-3'
                style={{
                  backgroundColor: theme === "Light" ? "white" : "black",
                  color: theme === "Light" ? "black" : "white",
                  padding: "10px"
                }}>
                <h3>Hệ Thống Quản Lý Điểm Danh Lớp Học </h3>
                <h3>Vũ Doanh Thái-HE191392</h3>
                <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
                  {theme === "Light" ? <CiDark /> : <CiLight />}
                </button>
              </div>
        </ThemeContext.Provider>
    </div>
  )
}

export default Header

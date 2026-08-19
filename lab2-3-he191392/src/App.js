import Header from './components/Header';
import Search from './components/Search';
import StudentList from './components/StudentList';
import { initialAttendances } from './data';
import React, { useEffect, useState, useReducer, useCallback, useMemo } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';

const STORAGE_KEY = 'attendances_data';

function attendanceReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return state.map(student =>
        student.id === action.payload
          ? { ...student, status: student.status === 'PRESENT' ? 'ABSENT' : 'PRESENT' }
          : student
      );
    case 'DELETE':
      return state.filter(student => student.id !== action.payload);
    default:
      return state;
  }
}

const initAttendance = (initialValue) => {
  try {
    const item = window.localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.error(error);
    return initialValue;
  }
};

function AttendanceManager() {
  const [students, dispatch] = useReducer(attendanceReducer, initialAttendances, initAttendance);
  const [theme, setTheme] = useState("Light");
  const [searchParams, setSearchParams] = useSearchParams();

  // Lấy giá trị search và filter từ URL query params (?search=...&filter=...)
  const searchName = searchParams.get('search') || "";
  const searchFilter = searchParams.get('filter') || "";

  // Đồng bộ dữ liệu vào localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
    } catch (error) {
      console.error(error);
    }
  }, [students]);

  // Cập nhật ?search=... lên URL
  const setSearchName = (name) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (name) {
        next.set('search', name);
      } else {
        next.delete('search');
      }
      return next;
    });
  };

  // Cập nhật ?filter=... lên URL
  const setSearchFilter = (filter) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (filter && filter !== 'ALL') {
        next.set('filter', filter);
      } else {
        next.delete('filter');
      }
      return next;
    });
  };

  // Reset bộ lọc trên URL
  const handleReset = () => {
    setSearchParams({});
  };

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchName = s.name.toLowerCase().includes(searchName.toLowerCase());
      const matchStatus = !searchFilter || searchFilter === "ALL" || s.status === searchFilter;
      return matchName && matchStatus;
    });
  }, [students, searchName, searchFilter]);

  const handleDelete = useCallback((id) => {
    dispatch({ type: 'DELETE', payload: id });
  }, []);

  const handleToggleStatus = useCallback((id) => {
    dispatch({ type: 'TOGGLE_STATUS', payload: id });
  }, []);

  return (
    <div style={{ backgroundColor: theme === "Light" ? "white" : "black", color: theme === "Light" ? "black" : "white", minHeight: "100vh" }}>
      <Header theme={theme} setTheme={setTheme} />
      <Search
        searchName={searchName}
        setSearchName={setSearchName}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
        handleReset={handleReset}
      />
      <StudentList 
        students={filteredStudents} 
        handleDelete={handleDelete} 
        handleToggleStatus={handleToggleStatus}
      />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AttendanceManager />} />
      <Route path="*" element={<AttendanceManager />} />
    </Routes>
  );
}

export default App;

import Header from './components/Header';
import Search from './components/Search';
import StudentList from './components/StudentList';
import { initialAttendances } from './data';
import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

function App() {
  const [students, setStudents] = useLocalStorage('attendances_data', initialAttendances);
  const [theme, setTheme] = useState("Light");
  const [searchName, setSearchName] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchName = s.name.toLowerCase().includes(searchName.toLowerCase());
      const matchStatus = !searchFilter || searchFilter === "ALL" || s.status === searchFilter;
      return matchName && matchStatus;
    });
  }, [students, searchName, searchFilter]);

  const handleDelete = useCallback((id) => {
    setStudents(prevClasses => prevClasses.filter(c => c.id !== id));
  }, [setStudents]);

  const handleReset = () => {
    setSearchName("");
    setSearchFilter("");
  };

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
      <StudentList students={filteredStudents} setStudents={setStudents} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

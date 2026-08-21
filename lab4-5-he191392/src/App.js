import Header from "./components/Header";
import Card from "./components/Card";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
    getSubjects,
} from './services/api';
import { useEffect, useState } from "react";

function ClassManagement({ subjects = [] }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSemester, setSelectedSemester] = useState('SUMMER2026');

    const handleRefresh = () => {
        setSearchTerm('');
        setSelectedSemester('SUMMER2026');
    };

    const filteredSubjects = subjects.filter(item => {
        const matchesSearch = (item.nameEn && item.nameEn.toLowerCase().includes(searchTerm.toLowerCase().trim())) ||
            (item.nameVi && item.nameVi.toLowerCase().includes(searchTerm.toLowerCase().trim())) ||
            (item.code && item.code.toLowerCase().includes(searchTerm.toLowerCase().trim()));

        const matchesSemester = item.semester === selectedSemester;

        return matchesSearch && matchesSemester;
    });

    return (
        <div>
            <Header 
                subjects={filteredSubjects} 
                allSubjects={subjects}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedSemester={selectedSemester}
                setSelectedSemester={setSelectedSemester}
                onRefresh={handleRefresh}
            />
            <Card subjects={filteredSubjects} />
        </div>
    );
}

function App() {
    const [subjects, setSubjects] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const [subsData] =
                    await Promise.all([
                        getSubjects(),
                    ]);

                setSubjects(subsData || []);
            } catch (err) {
                console.error('Failed to load data:', err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);
    return (
        <BrowserRouter>
            <div>
                <div>
                    <Routes>
                        <Route path='/courses' element={<ClassManagement subjects={subjects} />} />
                        <Route path='/' element={<ClassManagement subjects={subjects} />} />
                        <Route path='/detail/:id' element={<Product subjects={subjects} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
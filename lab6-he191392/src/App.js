import {
    getSubjects, getAccounts, getQuestions
} from './services/api';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Subjects from './components/Subjects';
import Questions from './components/Questions';

function App() {
    const [subjects, setSubjects] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [questions, setQuestions] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const [subsData, accData, quesData] =
                    await Promise.all([
                        getSubjects(),
                        getAccounts(),
                        getQuestions()
                    ]);

                setSubjects(subsData || []);
                setAccounts(accData || []);
                setQuestions(quesData || []);
            } catch (err) {
                console.error('Failed to load data:', err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);
    return (
        <div>
            <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/subjects" element={<Subjects subjects={subjects}/>} />
                        <Route path="/question/:id" element={<Questions subjects={subjects} questions={questions}/>} />
                        <Route path="*" element={<Navigate to="/login" replace />} />
                    </Routes>
            </Router>
        </div>
    )
}

export default App;
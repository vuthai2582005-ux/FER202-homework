import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuestions, getSubjects, deleteQuestion } from '../services/api';

function Questions({ subjects = [], questions = [] }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [subjectList, setSubjectList] = useState(subjects);
    const [questionList, setQuestionList] = useState(questions);

    useEffect(() => {
        if (subjects && subjects.length > 0) {
            setSubjectList(subjects);
        } else {
            getSubjects().then(data => setSubjectList(data || []));
        }
    }, [subjects]);

    useEffect(() => {
        if (questions && questions.length > 0) {
            setQuestionList(questions);
        } else {
            getQuestions().then(data => setQuestionList(data || []));
        }
    }, [questions]);

    const currentSubject = subjectList.find(s => String(s.id) === String(id));
    const subjectQuestions = questionList.filter(q => String(q.subjectId) === String(id));

    const handleDelete = async (questionId) => {
        const isConfirm = window.confirm("Delete?");
        if (isConfirm) {
            try {
                await deleteQuestion(questionId);
            } catch (error) {
                console.error("Lỗi khi xóa câu hỏi:", error);
            }
            setQuestionList(prev => prev.filter(q => String(q.id) !== String(questionId)));
        }
    };

    return (
        <div className='container mt-3'>
            <h3>Bộ câu hỏi môn: {currentSubject ? `${currentSubject.name} (${currentSubject.id})` : id}</h3>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <p className='mb-0'><strong>Tổng số câu hỏi:</strong> {subjectQuestions.length}</p>
                <div>
                    <Button variant="primary" className='me-3'>Thêm câu hỏi</Button>
                    <Button variant="secondary" onClick={() => navigate(`/subjects`)}>Quay lại danh sách môn</Button>
                </div>
            </div>
            <table className='table table-bordered mt-4'>
                <thead className='table-light'>
                    <tr>
                        <th style={{ width: '5%' }}>#</th>
                        <th style={{ width: '35%' }}>Nội dung câu hỏi</th>
                        <th style={{ width: '30%' }}>Các đáp án</th>
                        <th style={{ width: '15%' }}>Đáp án đúng</th>
                        <th style={{ width: '15%' }}>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subjectQuestions.length > 0 ? (
                            subjectQuestions.map((q, index) => (
                                <tr key={q.id || index}>
                                    <td>{index + 1}</td>
                                    <td>{q.content}</td>
                                    <td>
                                        {Array.isArray(q.options) ? q.options.join(', ') : q.options}
                                    </td>
                                    <td>{q.correctAnswer}</td>
                                    <td>
                                        <Button variant='info' size='sm' className='me-2 text-white'>Sửa</Button>
                                        <Button
                                            variant='danger'
                                            size='sm'
                                            onClick={() => handleDelete(q.id)}
                                        >
                                            Xóa
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center text-muted">
                                    Chưa có câu hỏi nào cho môn học này.
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Questions;


import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function StudentList({ students, setStudents, handleDelete }) {
    const presentCount = students.filter(s => s.status === 'PRESENT').length;
    const absentCount = students.filter(s => s.status === 'ABSENT').length;
    const attendanceRate = students.length > 0 ? ((presentCount / students.length) * 100).toFixed(1) : 0;

    const onDelete = (id) => {
        handleDelete(id);
    };

    const handleToggleStatus = (id) => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id
                    ? { ...student, status: student.status === 'PRESENT' ? 'ABSENT' : 'PRESENT' }
                    : student
            )
        );
    };

    return (
        <div className='mt-4 ms-4 me-4'>
            <p className="fw-semibold">
                Tổng số bản ghi: <span >{students.length}</span> |
                Có mặt: <span >{presentCount}</span> |
                Vắng mặt: <span >{absentCount}</span> |
                Tỷ lệ đi học: <span >{attendanceRate}%</span>
            </p>
            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã Lớp</th>
                            <th>Tên sinh viên</th>
                            <th>Ngày</th>
                            <th>Trạng Thái</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((c) => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.classId}</td>
                                <td>{c.name}</td>
                                <td>{c.date}</td>
                                <td>
                                    <button
                                        type="button"
                                        className={`badge ${c.status === 'PRESENT' ? 'bg-success' : 'bg-danger'}`}
                                        onClick={() => handleToggleStatus(c.id)}
                                    >
                                        {c.status}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='btn btn-sm ms-2'
                                        style={{ backgroundColor: 'red', color: "white" }}
                                        onClick={() => onDelete(c.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentList

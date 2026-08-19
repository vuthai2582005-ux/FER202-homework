
import React, { useMemo } from 'react';
import { Button, Form } from 'react-bootstrap';

function StudentList({ students, handleToggleStatus, handleDelete }) {
    // Feature 3: Dùng useMemo để tính toán thống kê dựa trên mảng students
    const { totalCount, presentCount, absentCount, attendanceRate } = useMemo(() => {
        const total = students.length;
        const present = students.filter(s => s.status === 'PRESENT').length;
        const absent = students.filter(s => s.status === 'ABSENT').length;
        const rate = total > 0 ? ((present / total) * 100).toFixed(1) : 0;
        return {
            totalCount: total,
            presentCount: present,
            absentCount: absent,
            attendanceRate: rate
        };
    }, [students]);

    const onDelete = (id) => {
        if (window.confirm("Xác nhận lại?")) {
            handleDelete(id);
        }
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
                                <td>
                                    {new Date(c.date).toLocaleString("vi-VN", {
                                        month: "2-digit",
                                        day: "2-digit",
                                        year: "numeric",
                                    })}
                                </td>
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

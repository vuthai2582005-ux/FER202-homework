import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Subjects({ subjects }) {
    const existAccount = localStorage.getItem("account");
    const account = existAccount ? JSON.parse(existAccount) : {};
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSignOut = () => {
        localStorage.removeItem("account");
        navigate("/login");
    };

    const filteredSubjects = (subjects || []).filter((s) =>
        s.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.id?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <p className='ms-4'>Hello {account.email} ({account.role})</p>
            <div className='d-flex justify-content-between'>
                <h3 className='ms-3'>Danh sách môn học </h3>
                <Button className='text-end me-3'
                    onClick={() => handleSignOut()}> Logout
                </Button>
            </div>
            <input
                className='ms-3 form-control w-25'
                type="text"
                placeholder='Tìm kiếm môn học...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table className='table table-bordered ms-3 mt-4 me-3'>
                <thead>
                    <tr>
                        <td>Mã Môn</td>
                        <td>Tên Môn học</td>
                        <td>Số lượng câu hỏi</td>
                        <td>Tools</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredSubjects.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.questionsCount}</td>
                                <td>
                                    <Button onClick={() => navigate(`/question/${s.id}`)}>Truy cập bộ câu hỏi</Button>
                                    <Button className='ms-3'>Thông tin</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Subjects;

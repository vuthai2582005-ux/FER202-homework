import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Product({ subjects = [] }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const subject = subjects.find(s => String(s.id) === String(id));

    return (
        <div className="ms-4 mt-4">
            <div>
                <p>
                    <span onClick={() => navigate('/courses')}>
                        My Courses
                    </span>
                    {' > '}
                    <span>{subject.nameEn}</span>
                </p>
                <h3>{subject.nameEn}</h3>
                <p>{subject.code}</p>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={() => navigate('/courses')}>
                    <span>&larr;</span>
                    <span>Back</span>
                </button>
            </div>
        </div>
    );
}

export default Product;


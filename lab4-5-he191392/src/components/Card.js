import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Card({ subjects = [] }) {
    const navigate = useNavigate();
    return (
        <div className="row row-cols-1 row-cols-md-4 g-3 ms-3 mt-4">
            {subjects.map(item => (
                <div className="col" key={item.id}>
                    <div className="card h-100 shadow-sm">
                        <div className="card-body p-2 d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="text-muted">{item.code}</span>
                                <span className="badge bg-light text-dark border rounded">
                                    {item.category}
                                </span>
                            </div>
                            <h5 className="card-title">{item.nameEn}</h5>
                            <p className="card-text mb-1"> {item.nameVi}</p>
                            <div className="mt-auto">
                                <button className="btn btn-primary btn-sm w-100 d-flex justify-content-between align-items-center"
                                    onClick={() => navigate(`/detail/${item.id}`)}>
                                    <span>Get started</span>
                                    <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card

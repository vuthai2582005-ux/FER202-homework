import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function Header({
    subjects = [],
    searchTerm = '',
    setSearchTerm = () => { },
    selectedSemester = '',
    setSelectedSemester = () => { },
    onRefresh = () => { }
}) {
    return (
        <div className='mt-4 ms-4 me-4' >
            <Row style={{ borderRadius: "10px", border: "1px solid #ccc", maxWidth: '50%' }} className="p-2 text-center align-items-center">
                <Col md={2}><strong>Courses</strong></Col>
                <Col md={2}><div>Projects</div></Col>
                <Col md={2}><div>Review</div></Col>
                <Col md={4}><div>Title Confirmmation</div></Col>
                <Col md={2}><div>Reference</div></Col>
            </Row>
            <Row className='mt-4 justify-content-between'>
                <Col md={4}>
                    <p className='text-muted mb-1'>Welcome back Lecture</p>
                    <h2 className='fw-bold'>My Courses</h2>
                    <Form.Group className='mt-3'>
                        <Form.Control
                            type="text"
                            placeholder="Search Courses"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <p className='mb-1'>Semester</p>
                    <div className='d-flex gap-2'>
                        <Form.Select
                            value={selectedSemester}
                            onChange={(e) => setSelectedSemester(e.target.value)}
                        >
                            <option value="SUMMER2026">SUMMER2026</option>
                            <option value="SPRING2026">SPRING2026</option>
                            <option value="FALL2025">FALL2025</option>
                        </Form.Select>
                        <Button onClick={onRefresh}>Refresh</Button>
                    </div>
                    <div className='mt-3 text-muted'>{subjects.length} courses</div>
                </Col>
            </Row>
        </div>
    )
}

export default Header

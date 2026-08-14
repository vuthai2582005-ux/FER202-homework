import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Search({ searchName, setSearchName, searchFilter, setSearchFilter, handleReset }) {
  return (
    <div className='mt-4 ms-4 me-4'>
      <Form className='row' onSubmit={(e) => e.preventDefault()}>
        <Form.Group className='col'>
          <Form.Control
            type="text"
            placeholder="Tìm danh sách theo tên sinh viên"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='col'>
          <Form.Select
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
          >
            <option value="">Tất cả trạng thái</option>
            <option value="PRESENT">PRESENT (Có mặt)</option>
            <option value="ABSENT">ABSENT (Vắng mặt)</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='col'>
          <Button 
            type="button" 
            onClick={handleReset} 
            style={{ backgroundColor: "#582303", color: "white", border: "none" }}
          >
            Reset Bộ lọc
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Search

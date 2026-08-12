import React, { useState } from 'react';

function SearchFilter() {
  // Danh bạ dữ liệu mẫu để tìm kiếm
  const initialItems = [
    'ReactJS',
    'NodeJS / Express',
    'Angular Framework',
    'VueJS Component',
    'MongoDB Database',
    'Bootstrap 5 UI',
    'Tailwind CSS',
    'NextJS Framework'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Thuật toán lọc kết hợp toLowerCase() và includes() tránh gạch chân / gạch chéo lỗi
  const filteredItems = initialItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="card-title text-warning mb-3">3. Search Filter Component</h3>
      
      {/* Ô tìm kiếm */}
      <div className="mb-3">
        <label className="form-label fw-semibold text-muted">Search item:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Type to filter..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Kết quả lọc */}
      <ul className="list-group shadow-sm">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="list-group-item list-group-item-action">
              <i className="bi bi-search me-2 text-secondary"></i> {item}
            </li>
          ))
        ) : (
          <li className="list-group-item text-danger text-center py-3">
            No items match your search.
          </li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter
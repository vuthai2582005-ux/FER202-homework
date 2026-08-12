
function App() {
  return (
    <div className="container mt-4">

      <div className="border p-3">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center bg-warning p-2 mb-3">
          <h4 className="mb-0">Form đặt vé máy bay</h4>
          
        </div>

        {/* Họ tên */}
        <div className="row mb-2 align-items-center">
          <label className="col-md-2 col-form-label">Họ tên</label>

          <div className="col-md-8">
            <div className="input-group">
              <div className="input-group-text">0</div>
              <input type="text" className="form-control" placeholder="Họ tên" />
              <div className="input-group-text">vnd</div>
            </div>
            <p className="text-muted">
              Phải nhập 5 ký tự, in hoa...
            </p>
          </div>
        </div>

        {/* Địa chỉ */}
        <div className="row mb-2 align-items-center">
          <label className="col-md-2 col-form-label">Địa chỉ</label>

          <div className="col-md-10">
            <input className="form-control" />
            <p className="text-muted">
              Phải nhập 5 ký tự, in hoa...
            </p>
          </div>
        </div>

        {/* Đi từ - Đến */}
        <div className="row mb-2">
          <div className="col-md-6">
            <label>Đi từ</label>
            <select className="form-select">
              <option>Hà Nội</option>
              <option>TP HCM</option>
            </select>
          </div>

          <div className="col-md-6">
            <label>Đến</label>
            <select className="form-select">
              <option>Hà Nội</option>
              <option>Đà Nẵng</option>
            </select>
          </div>
        </div>

        {/* Checkbox */}
        <div className="mb-3">
          <label className="form-label">
            Chọn chiều đi (Khứ hồi)
          </label>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Đi</label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Về</label>
          </div>
        </div>

        {/* Button */}
        <button className="myButton"  > 
          Đặt vé
        </button>

      </div>
    </div>
  );
}

export default App;
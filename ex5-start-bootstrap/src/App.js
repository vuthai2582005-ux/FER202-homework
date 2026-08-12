import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("ex1");

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 mb-4">
        <span className="navbar-brand fw-bold">Bootstrap 5 Exercises</span>
        <div className="navbar-nav ms-auto">
          <button
            className={`btn me-2 ${activeTab === "ex1" ? "btn-warning" : "btn-outline-light"}`}
            onClick={() => setActiveTab("ex1")}
          >
            Exercise 1 (Grid)
          </button>
          <button
            className={`btn me-2 ${activeTab === "ex2" ? "btn-warning" : "btn-outline-light"}`}
            onClick={() => setActiveTab("ex2")}
          >
            Exercise 2 (Logos)
          </button>
          <button
            className={`btn me-2 ${activeTab === "ex3" ? "btn-warning" : "btn-outline-light"}`}
            onClick={() => setActiveTab("ex3")}
          >
            Exercise 3 (Nav & Grid)
          </button>
          <button
            className={`btn me-2 ${activeTab === "ex4" ? "btn-warning" : "btn-outline-light"}`}
            onClick={() => setActiveTab("ex4")}
          >
            Exercise 4 (FPT Landing)
          </button>
          <button
            className={`btn ${activeTab === "ex5" ? "btn-warning" : "btn-outline-light"}`}
            onClick={() => setActiveTab("ex5")}
          >
            Exercise 5 (Students Detail)
          </button>
        </div>
      </nav>

      {/* Hiển thị bài tập tương ứng */}
      {activeTab === "ex1" && <Exercise1 />}
      {activeTab === "ex2" && <Exercise2 />}
      {activeTab === "ex3" && <Exercise3 />}
      {activeTab === "ex4" && <Exercise4 />}
      {activeTab === "ex5" && <Exercise5 />}
    </div>
  );
}

/* ==========================================================================
   BÀI TẬP 1: Grid System
   ========================================================================== */
function Exercise1() {
  const cellStyle = {
    backgroundColor: "#d3d3d3",
    border: "1px solid #777",
    padding: "15px",
    minHeight: "60px",
  };

  return (
    <div className="w-100">
      <div className="bg-light p-5 mb-4">
        <h1 className="display-5 fw-bold ms-5">Let's test the grid!</h1>
      </div>

      <div className="container mb-5">
        <div className="row g-0">
          <div className="col-6" style={cellStyle}>First col</div>
          <div className="col-6" style={cellStyle}>Second col</div>
        </div>
        <div className="row g-0">
          <div className="col-4" style={cellStyle}>col</div>
          <div className="col-4" style={cellStyle}>col</div>
          <div className="col-4" style={cellStyle}>col</div>
        </div>
        <div className="row g-0">
          <div className="col-3" style={cellStyle}>col</div>
          <div className="col-3" style={cellStyle}>col</div>
          <div className="col-3" style={cellStyle}>col</div>
          <div className="col-3" style={cellStyle}>col</div>
        </div>
      </div>

      <footer className="text-center py-3" style={{ backgroundColor: "#d8c3c3" }}>
        <h2 className="fw-bold m-0">Created by ABC!</h2>
      </footer>
    </div>
  );
}

/* ==========================================================================
   BÀI TẬP 2: HTML/CSS/Bootstrap Logos
   ========================================================================== */
function Exercise2() {
  return (
    <div className="w-100 min-vh-100 d-flex flex-column">
      <div className="bg-light p-5 text-center mb-5">
        <h1 className="display-5 fw-bold">My First Bootstrap Page</h1>
      </div>

      <div className="container my-auto">
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-4 mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
              className="img-fluid"
              style={{ maxHeight: "200px" }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="CSS3"
              className="img-fluid"
              style={{ maxHeight: "200px" }}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
              alt="Bootstrap"
              className="img-fluid"
              style={{ maxHeight: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   BÀI TẬP 3: Grid + Navigation Links
   ========================================================================== */
function Exercise3() {
  const cellStyle = {
    backgroundColor: "#d3d3d3",
    border: "1px solid #777",
    padding: "15px",
    minHeight: "60px",
  };

  return (
    <div className="w-100">
      <div className="bg-light p-5 mb-4">
        <h1 className="display-5 fw-bold ms-5">Let's test the grid!</h1>
      </div>

      <div className="container mb-4">
        <ul className="nav mb-4">
          <li className="nav-item">
            <a className="nav-link active" href="#active">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link1">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#link2">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#disabled" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>

        <div className="row g-0">
          <div className="col-6" style={cellStyle}>First col</div>
          <div className="col-6" style={cellStyle}>Second col</div>
        </div>
        <div className="row g-0">
          <div className="col-4" style={cellStyle}>col</div>
          <div className="col-4" style={cellStyle}>col</div>
          <div className="col-4" style={cellStyle}>col</div>
        </div>
        <div className="row g-0">
          <div className="col-3" style={cellStyle}>col</div>
          <div className="col-3" style={cellStyle}>col</div>
          <div className="col-3" style={cellStyle}>col</div>
          <div className="col-3" style={cellStyle}>col</div>
        </div>
      </div>

      <footer className="text-center py-3" style={{ backgroundColor: "#d8c3c3" }}>
        <h2 className="fw-bold m-0">Created by ABC!</h2>
      </footer>
    </div>
  );
}

/* ==========================================================================
   BÀI TẬP 4: FPT University Landing
   ========================================================================== */
function Exercise4() {
  return (
    <div className="w-100">
      {/* Header Banner */}
      <div className="py-4 text-center" style={{ backgroundColor: "#e08b27" }}>
        <div className="bg-white d-inline-block p-4 rounded shadow-sm mb-3">
          <img src = "/images/logo.png"/>
        </div>
        <div>
          <a href="#home" className="text-white text-decoration-none mx-2 fs-5">Home</a>
          <a href="#about" className="text-white text-decoration-none mx-2 fs-5">About</a>
          <a href="#contact" className="text-white text-decoration-none mx-2 fs-5">Contact</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container text-center my-5 py-3">
        <h2 className="fw-bold mb-3">About</h2>
        <p className="text-muted mb-5">This is the about section of the website.</p>

        <h2 className="fw-bold mb-3">Contact</h2>
        <p className="text-muted">For any inquiries, please contact us at example@example.com.</p>
      </div>

      {/* Footer */}
      <footer className="text-center py-3" style={{ backgroundColor: "#f3cc8a" }}>
        <p className="m-0 text-white">© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

/* ==========================================================================
   BÀI TẬP 5: Students Detail
   ========================================================================== */
function Exercise5() {
  const students = [
    { id: "DE160182", name: "Nguyễn Hữu Quốc Khánh", loc: "DaNang", img: "/images/student1.png" },
    { id: "DE160377", name: "Choy Vĩnh Thiên", loc: "QuangNam", img: "/images/student2.png" },
    { id: "DE160547", name: "Đỗ Nguyên Phúc", loc: "QuangNam", img: "/images/student3.png" },
    { id: "DE170049", name: "Lê Hoàng Minh", loc: "DaNang", img: "/images/student4.png" },
  ];

  return (
    <div className="w-100">
      {/* Top Navbar */}
      <div className="p-3 d-flex justify-content-between align-items-center" style={{ backgroundColor: "#e08b27" }}>
        <div className="d-flex align-items-center">
          <img className="me-2" src = "/images/logo.png" alt="Logo" style={{ height: "50px" }} />
          <a href="#home" className="text-white text-decoration-none me-3">Trang chủ</a>
          <a href="#nganh" className="text-white text-decoration-none me-3">Ngành học</a>
          <a href="#tuyen" className="text-white text-decoration-none me-3">Tuyển sinh</a>
          <a href="#sv" className="text-white text-decoration-none me-3">Sinh viên</a>
        </div>
        <div className="d-flex align-items-center text-white">
          <span className="me-2">Search:</span>
          <input type="text" className="form-control form-control-sm" style={{ width: "150px" }} />
        </div>
      </div>

      {/* Hero Banner Image */}
      <div className="text-center py-4" style={{ backgroundColor: "#e08b27"}}>
        <img
          src="/images/banner.png"
          alt="Banner"
          className="img-fluid rounded shadow-sm"
          style={{height:"100%"}}
        />
      </div>

      {/* Breadcrumb */}
      <div className="container mt-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-light p-2 rounded">
            <li className="breadcrumb-item"><a href="#home">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          </ol>
        </nav>
      </div>

      {/* Main Student Cards Grid */}
      <div className="container mb-5">
        <h2 className="text-center fw-bold my-4">Students Detail</h2>
        <div className="row g-4">
          {students.map((st, idx) => (
            <div key={idx} className="col-md-6">
              <div className="card h-100 shadow-sm">
                <img src={st.img} className="card-img-top" alt={st.name} style={{ height: "300px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{st.id}</h5>
                  <div className="d-flex justify-content-between my-2 text-muted px-3">
                    <span>{st.name}</span>
                    <span>{st.loc}</span>
                  </div>
                  <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                    <label className="form-check-label">
                      <input type="radio" name={`att-${st.id}`} className="form-check-input me-1" />
                      Absent
                    </label>
                    <label className="form-check-label">
                      <input type="radio" name={`att-${st.id}`} className="form-check-input me-1" />
                      Present
                    </label>
                  </div>
                  <button className="btn btn-warning text-white px-4">Submit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 text-white" style={{ backgroundColor: "#e08b27" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h5 className="fw-bold">Our Address</h5>
              <p className="mb-1">Khu đô thị FPT Đà Nẵng</p>
              <p className="mb-1">📞 +84023111111</p>
              <p className="mb-1">📠 +852 8765 4321</p>
              <p className="mb-0">✉ fptudn@fpt.edu.vn</p>
            </div>
            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <div className="fs-3">
                <span className="me-3">G+</span>
                <span className="me-3">f</span>
                <span className="me-3">in</span>
                <span className="me-3">🐦</span>
                <span className="me-3">▶</span>
                <span>✉</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 border-top pt-3">
            <p className="m-0">© Copyright 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import products from "./products";
function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <div className="row p-3">
        {/* Logo */}
        <div className="col-md-2">Navbar</div>
        {/* Menu */}
        <div className="col-md-6 d-flex gap-4">
          <span>Home</span>
          <span>Link</span>
          <span>Dropdown</span>
        </div>

        {/* Search */}
        <div className="search col-md-4">
          <input type="text" placeholder="Search" />
          <button className="btnSearch">Search</button>
        </div>
      </div>

      {/* Banner */}
      <div className="row">
        <div className="col-md-12">
          <img src="./car1.png" alt="Banner" className="banner-img" />    {/* nếu ảnh lỗi thì nó hiện banner */}
        </div>
      </div>

      {/* Products */}

      <h2>NEW PRODUCT</h2>
      <p>List product descriptions</p>

      <div className="row mb-3">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.name} className="product-img"/>
              <div className="card-body">
                <h5>{product.name}</h5>
                <div className="d-flex justify-content-between">
                  <del>{product.oldPrice}</del>
                  <span className="text-warning">{product.newPrice}</span>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary btn-sm me-2">🛒</button>
                  <button className="btn btn-outline-secondary btn-sm">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import products from "./products";

function App() {
  return (
    <div className="container mt-4">
      <h3>Cards Columns</h3>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className={`card custom-card card-color-${product.id}`}>
              <div className="card-body text-center">
                <img
                  src={product.image}
                  alt="car"
                  className="product-img"
                />
                <p className="mt-2">{product.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
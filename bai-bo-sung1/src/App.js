import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop ASUS", inputPrice: 15000, outPrice: 18500, stock: 5 },
    { id: 2, name: "Chuột", inputPrice: 300, outPrice: 450, stock: 0 },
    { id: 3, name: "Bàn phím", inputPrice: 800, outPrice: 1200, stock: 10 },
    { id: 4, name: "Màn hình Dell", inputPrice: 3500, outPrice: 4200, stock: 2 },
  ]);

  const maxPriceProduct = products.reduce((max, item) =>
    item.outPrice > max.outPrice ? item : max
    , products[0]);

  const minPriceProduct = products.reduce((min, item) =>
    item.outPrice < min.outPrice ? item : min
    , products[0]);

  const sortedByProfitDesc = products
    .map((item) => ({ 
      ...item,
      profit: item.outPrice - item.inputPrice,
    }))
    .sort((a, b) => b.profit - a.profit);

  const handleBuyNow = (productId) => {
    const updatedProducts = products.map((item) => {
      if (item.id === productId) {
        return { ...item, stock: item.stock - 1 };
      }
      return item;
    });
    setProducts(updatedProducts);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ color: "#1890ff" }}>BÀI TẬP QUẢN LÝ SẢN PHẨM</h1>

      <h2>1. Danh sách sản phẩm (Kèm trạng thái)</h2>
      <table
        border="1"
        cellPadding="10"
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Name</th>
            <th>InputPrice</th>
            <th>OutPrice</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><b>{item.name}</b></td>
              <td>{item.inputPrice.toLocaleString()}</td>
              <td>{item.outPrice.toLocaleString()}</td>
              <td>{item.stock}</td>
              <td
                style={{
                  color: item.stock > 0 ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {item.stock > 0 ? "InStock" : "OutStock "}
              </td>
              <td>
                <button className="btn btn-primary"
                disabled={item.stock===0} 
                onClick={() => handleBuyNow(item.id)}>Buy Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>2. Tìm sản phẩm theo giá bán</h2>
      <p style={{ fontSize: "16px" }}>
        <b>Sản phẩm có giá bán lớn nhất:</b> {maxPriceProduct.name} ({maxPriceProduct.outPrice.toLocaleString()})
      </p>
      <p style={{ fontSize: "16px" }}>
        <b>Sản phẩm có giá bán nhỏ nhất:</b> {minPriceProduct.name} ({minPriceProduct.outPrice.toLocaleString()})
      </p>

      <h2>3. Sắp xếp theo Lợi Nhuận (Giảm dần)</h2>
      <table
        border="1"
        cellPadding="10"
      >
        <thead>
          <tr style={{ backgroundColor: "#e6f7ff" }}>
            <th>Name</th>
            <th>InputPrice</th>
            <th>OutPrice</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {sortedByProfitDesc.map((item) => (
            <tr key={item.id}>
              <td><b>{item.name}</b></td>
              <td>{item.inputPrice.toLocaleString()}</td>
              <td>{item.outPrice.toLocaleString()}</td>
              <td style={{ fontWeight: "bold", color: "#1890ff" }}>
                {item.profit.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
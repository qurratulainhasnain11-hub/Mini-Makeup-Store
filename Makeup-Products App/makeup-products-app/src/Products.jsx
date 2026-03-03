import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    type: "",
    price: "",
    shade: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/makeup");
        
        setProducts(res.data);
      } catch (err) {
        console.error("error occured:");
      }
    };
    fetchProducts();
  }, []);

  const handleAddproduct = async () => {
    try {
      const res = await axios.post("http://localhost:3000/makeup", newProduct);
      setProducts([...products, res.data]);
      setNewProduct({
        name: "",
        brand: "",
        type: "",
        price: "",
        shade: "",
      });
    } catch (err) {
      console.error("Error occured:");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/makeup/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error in deleting the product:");
    }
  };
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={newProduct.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Enter brand name"
          value={newProduct.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          placeholder="Enter type"
          value={newProduct.type}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Enter the price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="shade"
          placeholder="Enter shade"
          value={newProduct.shade}
          onChange={handleChange}
        />
        <button onClick={handleAddproduct}>Add Product</button>
      </div>

      <table border="1" cellPadding="4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Type</th>
            <th>Price</th>
            <th>Shade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.type}</td>
              <td>{p.price}</td>
              <td>{p.shade}</td>
              <td>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from './features/Product';
import './Products.css';  

function DisplayProducts() {
  const products = useSelector((state) => state.product.value);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Book List</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Book ID</th>
            <th className="border p-2">Book Name</th>
            <th className="border p-2">Book Description</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">{product.category}</td>
              <td className="border p-2">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayProducts;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from './features/Product';

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
          <tr className="bg-gray-100" >
            <div className='pd-10'></div>
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
              <td className="border p-3">
                <button
                  class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
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

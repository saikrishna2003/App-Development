import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct, editProduct, removeALl } from './features/Product';
import DisplayProducts from './DisplayProducts';

const Products = () => {
  const product = useSelector((state) => state.product.value);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData));
    setFormData({
      id: '',
      name: '',
      description: '',
      category: '',
    });
  };

  const handleEdit = (id) => {
    const editedProduct = prompt('Enter new details for the product (format: name,description,category)');
    if (editedProduct) {
      const [name, description, category] = editedProduct.split(',');
      dispatch(editProduct({ id, name, description, category }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => console.log('Add Product Clicked')}
      >
        Add Product
      </button>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="productId" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">Book ID</label>
          <input
            type="text"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Book Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
        </div></form>

      <div className='flex flex-col w-[250px] gap-[30px]'>
        <button onClick={() => dispatch(removeALl())}
          className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Remove All
        </button>
      </div>

      <DisplayProducts />
    </div>
  );
};

export default Products;

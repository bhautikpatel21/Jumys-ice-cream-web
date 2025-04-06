import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    rev: '',
    price: '',
    color: '',
    ProductId: '',
    size: ''
  });
  const [img1, setImg1] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImg1Change = (e) => {
    setImg1(e.target.files[0]);
  };

  const handleImageListChange = (e) => {
    setImageList(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = new FormData();
      data.append('img1', img1);
      imageList.forEach((img) => {
        data.append('imageList', img);
      });
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await axios.post('/api/admin/add-product', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.data) {
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Revision</label>
            <input
              type="text"
              name="rev"
              value={formData.rev}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Color</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Product ID</label>
            <input
              type="number"
              name="ProductId"
              value={formData.ProductId}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Sizes (comma separated)</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <label className="block mb-1">Main Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImg1Change}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Additional Images (max 5)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageListChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

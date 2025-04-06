import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-2">
          <Link 
            to="/admin/dashboard" 
            className="block p-2 hover:bg-gray-700 rounded"
          >
            Dashboard
          </Link>
          <Link 
            to="/admin/products" 
            className="block p-2 hover:bg-gray-700 rounded"
          >
            View Products
          </Link>
        </nav>
      </div>
      
      <div className="flex-1 p-6">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => navigate('/admin/add-product')}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add New Product
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Products</h2>
          <p className="text-gray-600">Manage your products</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p className="text-gray-600">View customer orders</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-gray-600">Manage user accounts</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

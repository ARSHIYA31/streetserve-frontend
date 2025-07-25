import React from 'react';
import SupplierNavigation from './SupplierNavigation';
import { Package, TrendingUp, Users, DollarSign, Plus, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SupplierDashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Total Products',
      value: '24',
      change: '+3 this month',
      icon: Package,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Active Orders',
      value: '12',
      change: '+5 today',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total Customers',
      value: '156',
      change: '+12 this week',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Monthly Revenue',
      value: '₹45,670',
      change: '+18% from last month',
      icon: DollarSign,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  const recentProducts = [
    { id: 1, name: 'Fresh Onions', price: 30, stock: '500kg', status: 'active' },
    { id: 2, name: 'Tomatoes', price: 40, stock: '200kg', status: 'active' },
    { id: 3, name: 'Basmati Rice', price: 45, stock: '1000kg', status: 'active' },
    { id: 4, name: 'Turmeric Powder', price: 120, stock: '50kg', status: 'low-stock' },
  ];

  const recentOrders = [
    { id: 'ORD-001', vendor: 'Rajesh\'s Food Corner', items: '3 items', amount: '₹850', status: 'pending' },
    { id: 'ORD-002', vendor: 'Street Delights', items: '2 items', amount: '₹1200', status: 'accepted' },
    { id: 'ORD-003', vendor: 'Spice Junction', items: '1 item', amount: '₹600', status: 'delivered' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SupplierNavigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to Your Supplier Dashboard
          </h1>
          <p className="text-xl opacity-90">Manage your products and connect with street food vendors</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Products */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Products</h2>
              <button
                onClick={() => navigate('/supplier/add-product')}
                className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {recentProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">₹{product.price}/kg • Stock: {product.stock}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {product.status === 'active' ? 'Active' : 'Low Stock'}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
              <button
                onClick={() => navigate('/supplier/orders')}
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900">{order.vendor}</h3>
                    <p className="text-sm text-gray-600">Order #{order.id} • {order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.amount}</p>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      order.status === 'pending' 
                        ? 'bg-orange-100 text-orange-800'
                        : order.status === 'accepted'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/supplier/add-product')}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-opacity-30 transition-all"
            >
              <Plus className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Add New Product</h3>
              <p className="text-sm opacity-90">List a new ingredient for vendors</p>
            </button>
            
            <button
              onClick={() => navigate('/supplier/orders')}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-opacity-30 transition-all"
            >
              <Package className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">Manage Orders</h3>
              <p className="text-sm opacity-90">Accept or reject pending orders</p>
            </button>
            
            <button
              onClick={() => navigate('/supplier/profile')}
              className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-opacity-30 transition-all"
            >
              <Users className="w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-1">View Profile</h3>
              <p className="text-sm opacity-90">Update your business information</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
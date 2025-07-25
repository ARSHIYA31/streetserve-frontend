import React, { useState } from 'react';
import SupplierNavigation from './SupplierNavigation';
import { Check, X, Calendar, MapPin, Phone, Clock } from 'lucide-react';

const SupplierOrders: React.FC = () => {
  const [orders, setOrders] = useState([
    {
      id: 'ORD-001',
      vendorName: 'Rajesh\'s Food Corner',
      vendorPhone: '+91 98765 43210',
      vendorAddress: 'Stall No. 15, Connaught Place',
      items: [
        { name: 'Fresh Onions', quantity: 10, price: 30 },
        { name: 'Tomatoes', quantity: 5, price: 40 }
      ],
      totalAmount: 500,
      orderDate: '2025-01-22',
      requestedDeliveryDate: '2025-01-23',
      status: 'pending'
    },
    {
      id: 'ORD-002',
      vendorName: 'Street Delights',
      vendorPhone: '+91 87654 32109',
      vendorAddress: 'Near Metro Station, Karol Bagh',
      items: [
        { name: 'Basmati Rice', quantity: 25, price: 45 },
        { name: 'Turmeric Powder', quantity: 2, price: 120 }
      ],
      totalAmount: 1365,
      orderDate: '2025-01-22',
      requestedDeliveryDate: '2025-01-24',
      status: 'accepted'
    },
    {
      id: 'ORD-003',
      vendorName: 'Spice Junction',
      vendorPhone: '+91 76543 21098',
      vendorAddress: 'Shop 8, Chandni Chowk',
      items: [
        { name: 'Green Chillies', quantity: 3, price: 80 }
      ],
      totalAmount: 240,
      orderDate: '2025-01-21',
      requestedDeliveryDate: '2025-01-22',
      status: 'delivered'
    },
    {
      id: 'ORD-004',
      vendorName: 'Delhi Chaat Corner',
      vendorPhone: '+91 65432 10987',
      vendorAddress: 'Janpath Market',
      items: [
        { name: 'Coriander', quantity: 2, price: 60 },
        { name: 'Mint Leaves', quantity: 1, price: 40 }
      ],
      totalAmount: 160,
      orderDate: '2025-01-20',
      requestedDeliveryDate: '2025-01-21',
      status: 'rejected'
    }
  ]);

  const handleOrderAction = (orderId: string, action: 'accept' | 'reject') => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: action === 'accept' ? 'accepted' : 'rejected' } : order
      )
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'accepted':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Check className="w-4 h-4" />;
      case 'rejected':
        return <X className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const pendingOrders = orders.filter(order => order.status === 'pending');
  const otherOrders = orders.filter(order => order.status !== 'pending');

  return (
    <div className="min-h-screen bg-gray-50">
      <SupplierNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Management</h1>

        {/* Pending Orders Section */}
        {pendingOrders.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-orange-500 mr-2" />
              Pending Orders ({pendingOrders.length})
            </h2>
            <div className="grid gap-6">
              {pendingOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Order #{order.id}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Ordered: {new Date(order.orderDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {new Date(order.requestedDeliveryDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 flex space-x-3">
                      <button
                        onClick={() => handleOrderAction(order.id, 'accept')}
                        className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <Check className="w-4 h-4" />
                        <span>Accept</span>
                      </button>
                      <button
                        onClick={() => handleOrderAction(order.id, 'reject')}
                        className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Vendor Details</h4>
                      <div className="space-y-2 text-sm">
                        <p className="font-medium">{order.vendorName}</p>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Phone className="w-4 h-4" />
                          <span>{order.vendorPhone}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{order.vendorAddress}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Order Items</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span>{item.name} ({item.quantity}kg)</span>
                            <span className="font-medium">₹{item.quantity * item.price}</span>
                          </div>
                        ))}
                        <div className="border-t pt-2 flex justify-between items-center font-semibold">
                          <span>Total Amount:</span>
                          <span className="text-green-600">₹{order.totalAmount}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Orders Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order History</h2>
          <div className="grid gap-6">
            {otherOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                    <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                    <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span>{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>{new Date(order.orderDate).toLocaleDateString()}</span>
                    <span className="text-lg font-bold text-green-600">₹{order.totalAmount}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900">{order.vendorName}</p>
                    <p className="text-sm text-gray-600">{order.vendorAddress}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>Items: {order.items.length}</p>
                    <p>Delivery: {new Date(order.requestedDeliveryDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {orders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No orders received yet</p>
            <p className="text-sm text-gray-400 mt-2">Orders from vendors will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupplierOrders;
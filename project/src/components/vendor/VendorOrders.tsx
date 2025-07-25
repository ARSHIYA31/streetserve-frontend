import React from 'react';
import VendorNavigation from './VendorNavigation';
import { Clock, CheckCircle, Truck, Calendar } from 'lucide-react';

const VendorOrders: React.FC = () => {
  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2025-01-20',
      status: 'delivered',
      total: 850,
      items: [
        { name: 'Onions', supplier: 'Fresh Veggie Mart', quantity: 10, price: 30 },
        { name: 'Tomatoes', supplier: 'Green Valley Suppliers', quantity: 5, price: 40 },
      ]
    },
    {
      id: 'ORD-002',
      date: '2025-01-21',
      status: 'in-transit',
      total: 1200,
      items: [
        { name: 'Basmati Rice', supplier: 'Grain Masters', quantity: 25, price: 45 },
        { name: 'Turmeric Powder', supplier: 'Spice Kingdom', quantity: 2, price: 120 },
      ]
    },
    {
      id: 'ORD-003',
      date: '2025-01-22',
      status: 'pending',
      total: 600,
      items: [
        { name: 'Green Chillies', supplier: 'Farm Direct', quantity: 3, price: 80 },
        { name: 'Coriander', supplier: 'Herb House', quantity: 2, price: 60 },
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'in-transit':
        return <Truck className="w-5 h-5 text-blue-500" />;
      default:
        return <Clock className="w-5 h-5 text-orange-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'Delivered';
      case 'in-transit':
        return 'In Transit';
      default:
        return 'Pending';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'in-transit':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-orange-100 text-orange-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <VendorNavigation cartItemsCount={0} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

        <div className="space-y-6">
          {mockOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900">Order #{order.id}</h3>
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span>{getStatusText(order.status)}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(order.date).toLocaleDateString()}</span>
                  </div>
                  <span className="text-xl font-bold text-green-600">₹{order.total}</span>
                </div>
              </div>

              <div className="grid gap-3">
                {order.items.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.supplier}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                      <span className="text-sm text-gray-600">{item.quantity}kg</span>
                      <span className="text-sm font-medium text-gray-900">₹{item.price}/kg</span>
                      <span className="text-sm font-semibold text-green-600">₹{item.quantity * item.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              {order.status === 'in-transit' && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Tracking Update:</strong> Your order is out for delivery and will arrive within 2-3 hours.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {mockOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">You haven't placed any orders yet</p>
            <button
              onClick={() => window.location.href = '/vendor'}
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorOrders;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import VendorNavigation from './VendorNavigation';
import { CheckCircle, Calendar, MapPin, Phone } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };

  return (
    <div className="min-h-screen bg-gray-50">
      <VendorNavigation cartItemsCount={0} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Your order has been placed successfully and sent to suppliers</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Details</h2>
              <div className="space-y-4">
                {cartItems.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.ingredient.name}</h3>
                      <p className="text-sm text-gray-600">{item.supplier.name}</p>
                      <p className="text-sm text-gray-600">{item.quantity}kg × ₹{item.ingredient.pricePerKg}/kg</p>
                    </div>
                    <p className="font-semibold text-green-600">
                      ₹{item.quantity * item.ingredient.pricePerKg}
                    </p>
                  </div>
                ))}
                
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">Total Amount:</span>
                  <span className="text-2xl font-bold text-green-600">₹{totalAmount}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Delivery Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">Expected Delivery</p>
                    <p className="text-sm text-gray-600">Tomorrow, 10:00 AM - 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900">Delivery Address</p>
                    <p className="text-sm text-gray-600">Street Food Stall, Connaught Place, New Delhi</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="font-medium text-gray-900">Contact Support</p>
                    <p className="text-sm text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/vendor')}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate('/vendor/orders')}
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              View My Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../../types';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';

interface OrderCartProps {
  items: CartItem[];
  isOpen: boolean;
  onUpdateItem: (supplierId: string, ingredientId: string, quantity: number) => void;
  onRemoveItem: (supplierId: string, ingredientId: string) => void;
  onClose: () => void;
}

const OrderCart: React.FC<OrderCartProps> = ({ 
  items, 
  isOpen, 
  onUpdateItem, 
  onRemoveItem, 
  onClose 
}) => {
  const navigate = useNavigate();

  const totalAmount = items.reduce((total, item) => 
    total + (item.ingredient.pricePerKg * item.quantity), 0
  );

  const handleCheckout = () => {
    navigate('/vendor/order-confirmation', { state: { cartItems: items, totalAmount } });
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 sticky top-24 ${isOpen ? 'block' : 'hidden lg:block'}`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-5 h-5 text-orange-500" />
          <h3 className="font-semibold text-gray-900">Order Cart ({items.length})</h3>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        ) : (
          <>
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={`${item.supplier.id}-${item.ingredient.id}`} className="border border-gray-200 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-sm text-gray-900">{item.ingredient.name}</h4>
                      <p className="text-xs text-gray-600">{item.supplier.name}</p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.supplier.id, item.ingredient.id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateItem(item.supplier.id, item.ingredient.id, item.quantity - 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}kg</span>
                      <button
                        onClick={() => onUpdateItem(item.supplier.id, item.ingredient.id, item.quantity + 1)}
                        className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-green-600">
                      ₹{item.ingredient.pricePerKg * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="text-xl font-bold text-green-600">₹{totalAmount}</span>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderCart;
import React from 'react';
import { Supplier, Ingredient } from '../../types';
import { Star, Clock, Truck, MapPin } from 'lucide-react';
import { mockIngredients } from '../../data/mockData';

interface SupplierListProps {
  suppliers: Supplier[];
  selectedIngredient: string;
  onAddToCart: (supplier: Supplier, ingredient: Ingredient, quantity: number) => void;
}

const SupplierList: React.FC<SupplierListProps> = ({ 
  suppliers, 
  selectedIngredient, 
  onAddToCart 
}) => {
  const getIngredientById = (id: string) => {
    return mockIngredients.find(ing => ing.id === id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          Available Suppliers ({suppliers.length})
        </h2>
      </div>

      {suppliers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No suppliers found matching your criteria</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{supplier.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{supplier.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{supplier.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{supplier.deliveryTime}</span>
                    </div>
                    {supplier.deliveryAvailable && (
                      <div className="flex items-center space-x-1 text-green-600">
                        <Truck className="w-4 h-4" />
                        <span>Delivery Available</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <h4 className="font-medium text-gray-900">Available Products:</h4>
                <div className="grid gap-3">
                  {supplier.products
                    .filter(product => !selectedIngredient || product.id === selectedIngredient)
                    .map((product) => {
                      const ingredient = getIngredientById(product.id);
                      return (
                        <div key={product.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                              <span className="text-2xl">{ingredient?.emoji}</span>
                            </div>
                            <div>
                              <h5 className="font-medium text-gray-900">{product.name}</h5>
                              <p className="text-sm text-gray-600">
                                Min order: {product.minOrderKg}kg
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                            <div className="text-right">
                              <p className="text-xl font-bold text-green-600">
                                ₹{product.pricePerKg}/kg
                              </p>
                            </div>
                            <button
                              onClick={() => onAddToCart(supplier, product, product.minOrderKg)}
                              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                            >
                              Order Now
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupplierList;
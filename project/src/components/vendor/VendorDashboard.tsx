import React, { useState } from 'react';
import VendorNavigation from './VendorNavigation';
import SearchFilters from './SearchFilters';
import SupplierList from './SupplierList';
import OrderCart from './OrderCart';
import { mockSuppliers, mockIngredients } from '../../data/mockData';
import { Supplier, CartItem, Ingredient } from '../../types';
import { Search } from 'lucide-react';

const VendorDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState<string>('');
  const [filters, setFilters] = useState({
    maxPrice: '',
    minRating: '',
    deliveryAvailable: false,
  });
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (supplier: Supplier, ingredient: Ingredient, quantity: number) => {
    const existingItem = cartItems.find(
      item => item.supplier.id === supplier.id && item.ingredient.id === ingredient.id
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.supplier.id === supplier.id && item.ingredient.id === ingredient.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { supplier, ingredient, quantity }]);
    }
    setIsCartOpen(true);
  };

  const updateCartItem = (supplierId: string, ingredientId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(
        item => !(item.supplier.id === supplierId && item.ingredient.id === ingredientId)
      ));
    } else {
      setCartItems(cartItems.map(item =>
        item.supplier.id === supplierId && item.ingredient.id === ingredientId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const removeFromCart = (supplierId: string, ingredientId: string) => {
    setCartItems(cartItems.filter(
      item => !(item.supplier.id === supplierId && item.ingredient.id === ingredientId)
    ));
  };

  const filteredSuppliers = mockSuppliers.filter(supplier => {
    const matchesSearch = selectedIngredient ? 
      supplier.products.some(product => product.id === selectedIngredient) :
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.products.some(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesPrice = !filters.maxPrice || 
      supplier.products.some(product => product.pricePerKg <= parseInt(filters.maxPrice));

    const matchesRating = !filters.minRating || supplier.rating >= parseFloat(filters.minRating);

    const matchesDelivery = !filters.deliveryAvailable || supplier.deliveryAvailable;

    return matchesSearch && matchesPrice && matchesRating && matchesDelivery;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <VendorNavigation cartItemsCount={cartItems.length} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Welcome to StreetServe Vendor Dashboard
          </h1>
          <p className="text-xl opacity-90">Compare Prices. Order Smart. Serve Better.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for ingredients (onions, tomatoes, rice, spices...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Quick ingredient buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {mockIngredients.map((ingredient) => (
              <button
                key={ingredient.id}
                onClick={() => setSelectedIngredient(selectedIngredient === ingredient.id ? '' : ingredient.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedIngredient === ingredient.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-orange-50'
                }`}
              >
                {ingredient.name}
              </button>
            ))}
          </div>

          <SearchFilters filters={filters} onFiltersChange={setFilters} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <SupplierList 
              suppliers={filteredSuppliers}
              selectedIngredient={selectedIngredient}
              onAddToCart={addToCart}
            />
          </div>
          
          <div className="lg:col-span-1">
            <OrderCart
              items={cartItems}
              isOpen={isCartOpen}
              onUpdateItem={updateCartItem}
              onRemoveItem={removeFromCart}
              onClose={() => setIsCartOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
import React, { useState } from 'react';
import SupplierNavigation from './SupplierNavigation';
import { Upload, Package, DollarSign, MapPin, Camera } from 'lucide-react';

const SupplierAddProduct: React.FC = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    pricePerKg: '',
    minOrderKg: '',
    description: '',
    deliveryAreas: [] as string[],
    image: null as File | null,
  });

  const categories = [
    'Vegetables',
    'Fruits',
    'Grains & Cereals',
    'Spices & Seasonings',
    'Oils & Ghee',
    'Dairy Products',
    'Others'
  ];

  const availableAreas = [
    'Connaught Place',
    'Karol Bagh',
    'Chandni Chowk',
    'Lajpat Nagar',
    'Janpath',
    'India Gate',
    'Khan Market',
    'Sarojini Nagar'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAreaToggle = (area: string) => {
    setFormData(prev => ({
      ...prev,
      deliveryAreas: prev.deliveryAreas.includes(area)
        ? prev.deliveryAreas.filter(a => a !== area)
        : [...prev.deliveryAreas, area]
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Product data:', formData);
    alert('Product added successfully!');
    
    // Reset form
    setFormData({
      itemName: '',
      category: '',
      pricePerKg: '',
      minOrderKg: '',
      description: '',
      deliveryAreas: [],
      image: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SupplierNavigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Product</h1>
            <p className="text-gray-600">List a new ingredient for street food vendors to discover</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Product Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Package className="w-4 h-4 inline mr-1" />
                  Item Name *
                </label>
                <input
                  type="text"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleInputChange}
                  placeholder="e.g., Fresh Onions"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Price per KG (₹) *
                </label>
                <input
                  type="number"
                  name="pricePerKg"
                  value={formData.pricePerKg}
                  onChange={handleInputChange}
                  placeholder="e.g., 30"
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Order Quantity (KG) *
                </label>
                <input
                  type="number"
                  name="minOrderKg"
                  value={formData.minOrderKg}
                  onChange={handleInputChange}
                  placeholder="e.g., 5"
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the quality, origin, or any special features of your product..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Delivery Areas */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                <MapPin className="w-4 h-4 inline mr-1" />
                Delivery Areas * (Select all areas where you can deliver)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableAreas.map(area => (
                  <label key={area} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.deliveryAreas.includes(area)}
                      onChange={() => handleAreaToggle(area)}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-sm text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
              {formData.deliveryAreas.length === 0 && (
                <p className="text-red-500 text-sm mt-2">Please select at least one delivery area</p>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                <Camera className="w-4 h-4 inline mr-1" />
                Product Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    {formData.image ? formData.image.name : 'Click to upload product image'}
                  </p>
                  <p className="text-sm text-gray-500">PNG, JPG, GIF up to 5MB</p>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={formData.deliveryAreas.length === 0}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupplierAddProduct;
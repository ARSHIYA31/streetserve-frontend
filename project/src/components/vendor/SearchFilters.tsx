import React from 'react';
import { Filter } from 'lucide-react';

interface SearchFiltersProps {
  filters: {
    maxPrice: string;
    minRating: string;
    deliveryAvailable: boolean;
  };
  onFiltersChange: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (key: string, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <h3 className="font-semibold text-gray-700">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Price (₹/kg)
          </label>
          <input
            type="number"
            placeholder="e.g., 100"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Min Rating
          </label>
          <select
            value={filters.minRating}
            onChange={(e) => handleFilterChange('minRating', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="">Any Rating</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="deliveryAvailable"
            checked={filters.deliveryAvailable}
            onChange={(e) => handleFilterChange('deliveryAvailable', e.target.checked)}
            className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="deliveryAvailable" className="ml-2 text-sm text-gray-700">
            Delivery Available
          </label>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
import React, { useState } from 'react';
import SupplierNavigation from './SupplierNavigation';
import { User, Mail, Phone, MapPin, Store, Star, Package, TrendingUp, Edit2 } from 'lucide-react';

const SupplierProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    businessName: 'Fresh Veggie Mart',
    ownerName: 'Amit Sharma',
    email: 'amit@freshveggiemart.com',
    phone: '+91 99887 66554',
    address: 'Wholesale Market, Azadpur, New Delhi - 110033',
    description: 'Premium quality vegetables and fruits supplier serving Delhi NCR for over 15 years. We specialize in fresh produce sourced directly from farms.',
    yearsInBusiness: '15',
    licenseNumber: 'DEL/WM/2008/1247',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const stats = [
    { label: 'Total Products Listed', value: '24', icon: Package, color: 'text-blue-600' },
    { label: 'Orders Completed', value: '342', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Current Rating', value: '4.8', icon: Star, color: 'text-yellow-600' },
    { label: 'Monthly Revenue', value: '₹45K', icon: Store, color: 'text-purple-600' },
  ];

  const reviews = [
    {
      vendor: 'Rajesh\'s Food Corner',
      rating: 5,
      comment: 'Excellent quality onions and tomatoes. Always fresh and delivered on time!',
      date: '2025-01-20'
    },
    {
      vendor: 'Street Delights',
      rating: 5,
      comment: 'Best rice supplier in the area. Great prices and reliable service.',
      date: '2025-01-18'
    },
    {
      vendor: 'Spice Junction',
      rating: 4,
      comment: 'Good quality products, though delivery could be faster sometimes.',
      date: '2025-01-15'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SupplierNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Business Profile</h1>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Store className="w-4 h-4 inline mr-1" />
                    Business Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.businessName}
                      onChange={(e) => setProfile({ ...profile, businessName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.businessName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Owner Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.ownerName}
                      onChange={(e) => setProfile({ ...profile, ownerName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.ownerName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Business Address
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profile.address}
                      onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.address}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Description
                  </label>
                  {isEditing ? (
                    <textarea
                      value={profile.description}
                      onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.description}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years in Business
                  </label>
                  {isEditing ? (
                    <input
                      type="number"
                      value={profile.yearsInBusiness}
                      onChange={(e) => setProfile({ ...profile, yearsInBusiness: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.yearsInBusiness}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Number
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.licenseNumber}
                      onChange={(e) => setProfile({ ...profile, licenseNumber: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.licenseNumber}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Reviews & Ratings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{review.vendor}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{review.comment}</p>
                    <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Business Statistics</h2>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <stat.icon className={`w-5 h-5 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                        <p className={`font-semibold ${stat.color}`}>{stat.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Business Tips</h3>
              <p className="text-sm opacity-90">
                Maintain consistent quality and timely deliveries to get better ratings and more orders from vendors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierProfile;
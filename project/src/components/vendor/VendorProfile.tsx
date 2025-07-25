import React, { useState } from 'react';
import VendorNavigation from './VendorNavigation';
import { User, MapPin, Phone, Mail, Store, Edit2 } from 'lucide-react';

const VendorProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.streetfood@example.com',
    phone: '+91 98765 43210',
    businessName: 'Rajesh\'s Street Food Corner',
    address: 'Stall No. 15, Connaught Place, New Delhi - 110001',
    speciality: 'North Indian Street Food',
    yearsInBusiness: '8',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const stats = [
    { label: 'Total Orders', value: '156', color: 'text-blue-600' },
    { label: 'This Month', value: '23', color: 'text-green-600' },
    { label: 'Total Spent', value: '₹45,670', color: 'text-orange-600' },
    { label: 'Avg. Order Value', value: '₹293', color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <VendorNavigation cartItemsCount={0} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.name}</p>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.phone}</p>
                  )}
                </div>

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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.businessName}</p>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.address}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Speciality
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.speciality}
                      onChange={(e) => setProfile({ ...profile, speciality: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.speciality}</p>
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900 bg-gray-50 p-2 rounded">{profile.yearsInBusiness}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Statistics</h2>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{stat.label}</span>
                    <span className={`font-semibold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Pro Tip!</h3>
              <p className="text-sm opacity-90">
                Regular orders from trusted suppliers help you get better prices and priority delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
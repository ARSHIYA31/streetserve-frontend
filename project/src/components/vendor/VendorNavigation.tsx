import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Store, Home, ShoppingBag, User, LogOut, Menu, X } from 'lucide-react';

interface VendorNavigationProps {
  cartItemsCount: number;
}

const VendorNavigation: React.FC<VendorNavigationProps> = ({ cartItemsCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">StreetServe</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/vendor')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/vendor')
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-500 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>

            <button
              onClick={() => navigate('/vendor/orders')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/vendor/orders')
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-500 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>My Orders</span>
              {cartItemsCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => navigate('/vendor/profile')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/vendor/profile')
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-500 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Profile</span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  navigate('/vendor');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/vendor')
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-500 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>

              <button
                onClick={() => {
                  navigate('/vendor/orders');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/vendor/orders')
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-500 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span>My Orders</span>
                </div>
                {cartItemsCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  navigate('/vendor/profile');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/vendor/profile')
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-500 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>

              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default VendorNavigation;
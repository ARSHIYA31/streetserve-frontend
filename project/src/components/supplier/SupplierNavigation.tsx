import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Store, LayoutDashboard, Plus, ShoppingBag, User, LogOut, Menu, X } from 'lucide-react';

const SupplierNavigation: React.FC = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Store className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">StreetServe</h1>
              <span className="text-sm text-green-600 font-medium">Supplier</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/supplier')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/supplier')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate('/supplier/add-product')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/supplier/add-product')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Add Product</span>
            </button>

            <button
              onClick={() => navigate('/supplier/orders')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/supplier/orders')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Orders</span>
            </button>

            <button
              onClick={() => navigate('/supplier/profile')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/supplier/profile')
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
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
                  navigate('/supplier');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/supplier')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <LayoutDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </button>

              <button
                onClick={() => {
                  navigate('/supplier/add-product');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/supplier/add-product')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <Plus className="w-5 h-5" />
                <span>Add Product</span>
              </button>

              <button
                onClick={() => {
                  navigate('/supplier/orders');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/supplier/orders')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Orders</span>
              </button>

              <button
                onClick={() => {
                  navigate('/supplier/profile');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/supplier/profile')
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
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

export default SupplierNavigation;
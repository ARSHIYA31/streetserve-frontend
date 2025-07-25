import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VendorDashboard from './components/vendor/VendorDashboard';
import SupplierDashboard from './components/supplier/SupplierDashboard';
import LandingPage from './components/LandingPage';
import VendorOrders from './components/vendor/VendorOrders';
import VendorProfile from './components/vendor/VendorProfile';
import SupplierAddProduct from './components/supplier/SupplierAddProduct';
import SupplierOrders from './components/supplier/SupplierOrders';
import SupplierProfile from './components/supplier/SupplierProfile';
import OrderConfirmation from './components/vendor/OrderConfirmation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/vendor/orders" element={<VendorOrders />} />
          <Route path="/vendor/profile" element={<VendorProfile />} />
          <Route path="/vendor/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/supplier" element={<SupplierDashboard />} />
          <Route path="/supplier/add-product" element={<SupplierAddProduct />} />
          <Route path="/supplier/orders" element={<SupplierOrders />} />
          <Route path="/supplier/profile" element={<SupplierProfile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
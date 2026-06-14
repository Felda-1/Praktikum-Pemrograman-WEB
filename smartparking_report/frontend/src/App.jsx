import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LaporanList from './pages/LaporanList';
import LaporanForm from './pages/LaporanForm';
import Landing from './pages/Landing';
import MainLayout from './layouts/MainLayout';

import { Toaster } from 'react-hot-toast';

// Simple Protected Route Component
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router basename="/smartparking_report">
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="laporan" element={<LaporanList />} />
          <Route path="laporan/tambah" element={<LaporanForm />} />
          <Route path="laporan/edit/:id" element={<LaporanForm />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<div className="flex items-center justify-center min-h-screen">404 - Halaman Tidak Ditemukan</div>} />
      </Routes>
    </Router>
  );
}

export default App;

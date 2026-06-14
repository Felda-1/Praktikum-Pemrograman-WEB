import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post('/auth/login', formData);
      if (res.data.status === 'success') {
        localStorage.setItem('user', JSON.stringify(res.data.data));
        toast.success('Selamat datang kembali!');
        navigate('/dashboard');
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Terjadi kesalahan sistem.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-blue-700 p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">SmartParking</h1>
          <p className="text-indigo-100 mt-2">Kabupaten Bandung Smart City Report</p>
        </div>

        <Card className="shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login Operator</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="operator@bandung.go.id"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            
            <Button type="submit" className="w-full py-3" loading={loading}>
              Masuk ke Dashboard
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Belum punya akun? <Link to="/register" className="text-indigo-600 font-bold hover:underline">Daftar sekarang</Link>
            </p>
          </div>
        </Card>
        
        <p className="text-center text-indigo-200 text-xs mt-8">
          &copy; 2026 Pemerintah Kabupaten Bandung. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;

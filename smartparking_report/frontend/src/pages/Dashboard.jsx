import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { FileText, CheckCircle, AlertTriangle, XCircle, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const [data, setData] = useState({ stats: null, latest: [] });
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get('/laporan/stats');
      if (res.data.status === 'success') {
        setData(res.data.data);
      }
    } catch (err) {
      console.error('Fetch stats failed');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      <p className="mt-4 text-gray-500 font-medium">Memuat data statistik...</p>
    </div>
  );

  const statsCards = [
    { title: 'Total Laporan', value: data.stats?.total || 0, icon: <FileText className="text-blue-600" />, color: 'blue' },
    { title: 'Status Ringan', value: data.stats?.ringan || 0, icon: <CheckCircle className="text-emerald-600" />, color: 'emerald' },
    { title: 'Status Sedang', value: data.stats?.sedang || 0, icon: <AlertTriangle className="text-amber-600" />, color: 'amber' },
    { title: 'Status Berat', value: data.stats?.berat || 0, icon: <XCircle className="text-rose-600" />, color: 'rose' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Selamat datang kembali, <span className="font-bold text-indigo-600">{user?.nama}</span>.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, idx) => (
          <Card key={idx} className="hover:scale-105 transition-transform cursor-default">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.title}</p>
                <p className="text-3xl font-black text-gray-800">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card title="5 Laporan Terbaru" className="h-full">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-400 border-b">
                    <th className="pb-4 font-semibold uppercase">Lokasi</th>
                    <th className="pb-4 font-semibold uppercase">Waktu</th>
                    <th className="pb-4 font-semibold uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.latest.length > 0 ? (
                    data.latest.map((item) => (
                      <tr key={item.id} className="group hover:bg-gray-50 transition">
                        <td className="py-4">
                          <p className="font-bold text-gray-800">{item.lokasi}</p>
                          <p className="text-xs text-gray-400">{item.jumlah_kendaraan} Kendaraan</p>
                        </td>
                        <td className="py-4 text-sm text-gray-500">
                          {new Date(item.waktu_laporan).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                        </td>
                        <td className="py-4">
                          <Badge variant={
                            item.status_pelanggaran === 'Berat' ? 'danger' :
                            item.status_pelanggaran === 'Sedang' ? 'warning' :
                            'success'
                          }>
                            {item.status_pelanggaran}
                          </Badge>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="py-8 text-center text-gray-400 italic">Belum ada laporan tercatat.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-indigo-600 text-white">
            <TrendingUp className="mb-4 h-8 w-8 text-indigo-200" />
            <h3 className="text-xl font-bold mb-2">Pantau Ketertiban</h3>
            <p className="text-indigo-100 text-sm">
              Gunakan data ini untuk koordinasi dengan petugas di lapangan guna mengurangi parkir liar di titik-titik rawan.
            </p>
            <Link to="/laporan/tambah">
                <button className="mt-6 w-full py-2 bg-white text-indigo-600 rounded-lg font-bold hover:bg-indigo-50 transition">
                    + Buat Laporan Baru
                </button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

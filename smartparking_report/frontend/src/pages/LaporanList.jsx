import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/api';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import { Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';

const LaporanList = () => {
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLaporan();
  }, []);

  const fetchLaporan = async () => {
    try {
      const res = await API.get('/laporan');
      if (res.data.status === 'success') {
        setLaporan(res.data.data);
      }
    } catch (err) {
      toast.error('Gagal memuat data laporan');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus laporan ini?')) {
      try {
        const res = await API.delete(`/laporan/destroy/${id}`);
        if (res.data.status === 'success') {
          toast.success('Laporan berhasil dihapus');
          fetchLaporan();
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error('Terjadi kesalahan saat menghapus');
      }
    }
  };

  if (loading) return (
    <div className="flex justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Data Laporan</h1>
          <p className="text-gray-500">Kelola seluruh data parkir liar Kabupaten Bandung.</p>
        </div>
        <Link to="/laporan/tambah">
          <Button className="flex items-center gap-2">
            <Plus size={18} /> Tambah Laporan
          </Button>
        </Link>
      </div>

      <Card className="!p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Lokasi & Deskripsi</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Waktu Kejadian</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Kendaraan</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {laporan.length > 0 ? (
                laporan.map((item) => (
                  <tr key={item.id} className="hover:bg-indigo-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-800">{item.lokasi}</div>
                      <div className="text-sm text-gray-400 truncate max-w-xs">{item.deskripsi}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(item.waktu_laporan).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center font-semibold text-gray-700">
                      {item.jumlah_kendaraan}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <Badge variant={
                        item.status_pelanggaran === 'Berat' ? 'danger' :
                        item.status_pelanggaran === 'Sedang' ? 'warning' :
                        'success'
                      }>
                        {item.status_pelanggaran}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a 
                          href={`http://localhost/smartparking_report/public/uploads/${item.foto_bukti}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="Lihat Foto"
                        >
                          <ExternalLink size={18} />
                        </a>
                        <Link 
                          to={`/laporan/edit/${item.id}`} 
                          className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition"
                          title="Edit"
                        >
                          <Edit2 size={18} />
                        </Link>
                        <button 
                          onClick={() => handleDelete(item.id)} 
                          className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                          title="Hapus"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center">
                      <FileText size={48} className="text-gray-200 mb-2" />
                      <p className="text-gray-400 font-medium">Belum ada data laporan.</p>
                      <Link to="/laporan/tambah" className="text-indigo-600 text-sm font-bold hover:underline mt-1">Buat laporan pertama Anda</Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default LaporanList;

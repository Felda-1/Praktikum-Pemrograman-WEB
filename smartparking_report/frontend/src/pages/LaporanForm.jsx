import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import API from '../services/api';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import LocationSuggest from '../components/ui/LocationSuggest';
import { ArrowLeft, Upload, Image as ImageIcon } from 'lucide-react';

const LaporanForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    lokasi: '',
    waktu_laporan: '',
    jumlah_kendaraan: '',
    deskripsi: '',
    foto_bukti: null
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isEdit) {
      fetchDetail();
    } else {
      const now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      setFormData(prev => ({ ...prev, waktu_laporan: now.toISOString().slice(0, 16) }));
    }
  }, [id]);

  const fetchDetail = async () => {
    try {
      const res = await API.get(`/laporan/detail/${id}`);
      if (res.data.status === 'success') {
        const d = res.data.data;
        setFormData({
          lokasi: d.lokasi,
          waktu_laporan: d.waktu_laporan.replace(' ', 'T').slice(0, 16),
          jumlah_kendaraan: d.jumlah_kendaraan,
          deskripsi: d.deskripsi,
          foto_bukti: null
        });
        setPreview(`http://localhost/smartparking_report/public/uploads/${d.foto_bukti}`);
      } else {
        toast.error(res.data.message);
        navigate('/laporan');
      }
    } catch (err) {
      toast.error('Gagal mengambil data laporan');
      navigate('/laporan');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error('Ukuran file maksimal 2MB');
        return;
      }
      setFormData({ ...formData, foto_bukti: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    data.append('lokasi', formData.lokasi);
    data.append('waktu_laporan', formData.waktu_laporan);
    data.append('jumlah_kendaraan', formData.jumlah_kendaraan);
    data.append('deskripsi', formData.deskripsi);
    if (formData.foto_bukti) {
      data.append('foto_bukti', formData.foto_bukti);
    }

    try {
      const url = isEdit ? `/laporan/update/${id}` : '/laporan/store';
      const res = await API.post(url, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (res.data.status === 'success') {
        toast.success(res.data.message);
        navigate('/laporan');
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error('Terjadi kesalahan saat menyimpan data');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/laporan" className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowLeft size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-3xl font-extrabold text-gray-900">
          {isEdit ? 'Sunting Laporan' : 'Tambah Laporan Baru'}
        </h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Lokasi Kejadian</label>
              <LocationSuggest
                value={formData.lokasi}
                onChange={(val) => setFormData({ ...formData, lokasi: val })}
                placeholder="Cari jalan atau tempat..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Waktu Pelaporan</label>
              <input
                type="datetime-local"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-gray-50"
                value={formData.waktu_laporan}
                onChange={(e) => setFormData({ ...formData, waktu_laporan: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Jumlah Kendaraan</label>
            <input
              type="number"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-gray-50"
              placeholder="Contoh: 12"
              value={formData.jumlah_kendaraan}
              onChange={(e) => setFormData({ ...formData, jumlah_kendaraan: e.target.value })}
              required
              min="1"
            />
            <p className="text-xs text-indigo-500 font-medium italic">
              * Sistem akan otomatis menentukan status pelanggaran berdasarkan angka ini.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Deskripsi Kondisi Lapangan</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition bg-gray-50"
              rows="4"
              placeholder="Jelaskan detail situasi di lokasi..."
              value={formData.deskripsi}
              onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
              required
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Foto Bukti Pelanggaran</label>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-grow w-full">
                <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Klik untuk upload atau drag & drop</p>
                    <p className="text-xs text-gray-400">PNG, JPG atau JPEG (Maks. 2MB)</p>
                  </div>
                  <input type="file" className="hidden" onChange={handleFileChange} required={!isEdit} accept="image/*" />
                </label>
              </div>
              
              {preview && (
                <div className="w-full md:w-64 h-40 relative group">
                  <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-xl border border-gray-200" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-xl flex items-center justify-center">
                    <ImageIcon className="text-white" size={32} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex gap-4">
            <Link to="/laporan" className="flex-grow">
              <Button variant="outline" className="w-full py-4">Batal</Button>
            </Link>
            <Button type="submit" className="flex-[2] py-4" loading={submitting}>
              {isEdit ? 'Simpan Perubahan' : 'Kirim Laporan'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LaporanForm;

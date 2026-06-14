import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BarChart3, MapPin, ClipboardCheck, ArrowRight, Car } from 'lucide-react';
import Button from '../components/ui/Button';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto border-b border-slate-50">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-2 rounded-lg">
            <Car className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">SmartParking<span className="text-indigo-600">Report</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition">Fitur</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition">Cara Kerja</a>
          <a href="#about" className="hover:text-indigo-600 transition">Tentang</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="text-sm">Masuk</Button>
          </Link>
          <Link to="/register">
            <Button className="text-sm px-6">Daftar Operator</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-300 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-8 border border-indigo-100 uppercase tracking-widest">
            <ShieldCheck size={14} /> Infrastruktur Smart City Bandung
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Wujudkan Ketertiban Kota <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Secara Real-Time.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
            Sistem pelaporan parkir liar terintegrasi untuk Kabupaten Bandung. 
            Memudahkan operator lapangan dalam memantau, mencatat, dan menindak pelanggaran perparkiran dengan efisien.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button className="h-14 px-10 text-lg flex items-center gap-2 shadow-xl shadow-indigo-200">
                Mulai Pelaporan <ArrowRight size={20} />
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" className="h-14 px-10 text-lg">
                Lihat Fitur
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-black text-slate-900">100%</p>
            <p className="text-sm text-slate-500 font-medium">Digitalized</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">24/7</p>
            <p className="text-sm text-slate-500 font-medium">Monitoring</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">Bandung</p>
            <p className="text-sm text-slate-500 font-medium">Focused</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">Live</p>
            <p className="text-sm text-slate-500 font-medium">Reporting</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Fitur Utama Sistem</h2>
          <p className="text-slate-500">Solusi komprehensif untuk manajemen ketertiban lalu lintas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg shadow-indigo-200">
              <ClipboardCheck size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Pencatatan Cepat</h3>
            <p className="text-slate-500 leading-relaxed">Input data pelanggaran perparkiran dalam hitungan detik dengan interface yang intuitif.</p>
          </div>
          <div className="group">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg shadow-blue-200">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Geolokasi Terpadu</h3>
            <p className="text-slate-500 leading-relaxed">Identifikasi titik-titik rawan parkir liar di seluruh wilayah Kabupaten Bandung secara akurat.</p>
          </div>
          <div className="group">
            <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition shadow-lg shadow-emerald-200">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Analisis Data</h3>
            <p className="text-slate-500 leading-relaxed">Visualisasi statistik pelanggaran untuk membantu pengambilan keputusan strategis.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Car className="text-indigo-400" size={32} />
              <span className="text-2xl font-bold">SmartParking<span className="text-indigo-400">Report</span></span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm">
              Sistem informasi perparkiran modern untuk mewujudkan Bandung yang lebih tertib, aman, dan nyaman.
            </p>
          </div>
          <div className="text-right">
            <h4 className="font-bold mb-4">Kontak Kami</h4>
            <p className="text-slate-400">Dinas Perhubungan Kabupaten Bandung</p>
            <p className="text-slate-400 text-sm mt-2">Jl. Raya Soreang No. 12, Bandung</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; 2026 SmartParking Report. Built for Civic Infrastructure.
        </div>
      </footer>
    </div>
  );
};

export default Landing;

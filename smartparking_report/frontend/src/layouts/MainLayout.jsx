import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';
import API from '../services/api';
import { LayoutDashboard, FileText, LogOut, User, Car } from 'lucide-react';

const MainLayout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = async () => {
    try {
      await API.post('/auth/logout');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed');
    }
  };

  const navItems = [
    { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { to: '/laporan', label: 'Data Laporan', icon: <FileText size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-slate-50 flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Car className="text-white" size={20} />
          </div>
          <span className="font-bold text-slate-900 tracking-tight">SmartParking<span className="text-indigo-600">Report</span></span>
        </div>
        
        <nav className="flex-grow p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive 
                  ? "bg-indigo-50 text-indigo-700 shadow-sm shadow-indigo-100" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-50">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-rose-500 hover:bg-rose-50 transition-all"
          >
            <LogOut size={20} />
            Keluar Sistem
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-grow flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-8">
          <div className="lg:hidden flex items-center gap-2">
             <Car className="text-indigo-600" size={24} />
             <span className="font-bold text-slate-900">SPR</span>
          </div>
          <div className="hidden lg:block">
             <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Infrastruktur Smart City Bandung</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-slate-900 leading-none">{user?.nama}</span>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-tighter">Operator Lapangan</span>
            </div>
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
               <User className="text-slate-400" size={20} />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

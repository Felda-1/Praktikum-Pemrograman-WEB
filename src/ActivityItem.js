import React from 'react';
import './ActivityItem.css';

// ============================================================
// CHILD COMPONENT: ActivityItem
// Menerima props dari parent (App):
//   - activity  : object aktivitas { id, nama, waktu }
//   - onHapus   : fungsi untuk menghapus item
//   - nomor     : nomor urut item dalam daftar
// ============================================================
function ActivityItem({ activity, onHapus, nomor }) {
  return (
    <li className="activity-item">
      {/* Nomor urut */}
      <span className="activity-nomor">{String(nomor).padStart(2, '0')}</span>

      {/* Konten aktivitas */}
      <div className="activity-konten">
        <p className="activity-nama">{activity.nama}</p>
        <span className="activity-waktu">Ditambahkan: {activity.waktu}</span>
      </div>

      {/* Tombol hapus */}
      <button
        className="btn-hapus"
        onClick={() => onHapus(activity.id)}
        title="Hapus aktivitas"
        aria-label={`Hapus ${activity.nama}`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
          <path d="M10 11v6M14 11v6" />
          <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
        </svg>
        Hapus
      </button>
    </li>
  );
}

export default ActivityItem;

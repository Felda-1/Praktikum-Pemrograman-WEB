import React from 'react';
import ActivityItem from './ActivityItem';
import './ActivityList.css';

// ============================================================
// CHILD COMPONENT: ActivityList
// Menerima props dari parent (App):
//   - activities : array semua aktivitas dari state App
//   - onHapus    : fungsi hapus yang diteruskan ke ActivityItem
//
// Menerapkan CONDITIONAL RENDERING:
//   - Jika array kosong  → tampilkan pesan "Belum ada aktivitas"
//   - Jika array berisi  → tampilkan daftar ActivityItem
// ============================================================
function ActivityList({ activities, onHapus }) {
  // ---- CONDITIONAL RENDERING ----
  if (activities.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <line x1="8" y1="15" x2="16" y2="15" />
          </svg>
        </div>
        <p className="empty-title">Belum ada aktivitas</p>
        <p className="empty-subtitle">Tambahkan aktivitas pertamamu di atas!</p>
      </div>
    );
  }

  // ---- RENDERING LIST (menggunakan .map()) ----
  return (
    <ul className="activity-list">
      {activities.map((activity, index) => (
        <ActivityItem
          key={activity.id}
          activity={activity}
          onHapus={onHapus}
          nomor={index + 1}
        />
      ))}
    </ul>
  );
}

export default ActivityList;

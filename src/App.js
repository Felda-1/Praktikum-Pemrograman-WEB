import React, { useState } from 'react';
import ActivityList from './ActivityList';
import './App.css';

// ============================================================
// PARENT COMPONENT: App
//
// Tanggung jawab:
//   1. Menyimpan STATE utama: daftar aktivitas & input teks
//   2. Menyediakan fungsi tambah & hapus aktivitas
//   3. Meneruskan data ke child via PROPS
//   4. Merender form input + komponen ActivityList
// ============================================================
function App() {

  // ---- STATE: daftar aktivitas (array of objects) ----
  const [activities, setActivities] = useState([
    { id: 1, nama: 'Mengerjakan Laporan Praktikum', waktu: formatWaktu(new Date()) },
    { id: 2, nama: 'Belajar React JS',              waktu: formatWaktu(new Date()) },
    { id: 3, nama: 'Diskusi Kelompok Proyek Akhir',  waktu: formatWaktu(new Date()) },
  ]);

  // ---- STATE: nilai input teks (controlled input) ----
  const [inputNama, setInputNama] = useState('');

  // ---- STATE: pesan error validasi ----
  const [errorMsg, setErrorMsg] = useState('');

  // ---- HELPER: format waktu saat ini ----
  function formatWaktu(date) {
    return date.toLocaleString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }

  // ---- FUNGSI: menambahkan aktivitas baru ----
  function handleTambah(e) {
    e.preventDefault(); // cegah reload halaman

    const namaTrimmed = inputNama.trim();
    if (!namaTrimmed) {
      setErrorMsg('Nama aktivitas tidak boleh kosong!');
      return;
    }

    const aktivitasBaru = {
      id: Date.now(),          // ID unik berdasarkan timestamp
      nama: namaTrimmed,
      waktu: formatWaktu(new Date()),
    };

    // Update state: spread array lama + tambah item baru di depan
    setActivities([aktivitasBaru, ...activities]);
    setInputNama('');   // reset input
    setErrorMsg('');    // hapus error
  }

  // ---- FUNGSI: menghapus aktivitas berdasarkan ID ----
  function handleHapus(id) {
    // Filter: buat array baru tanpa item yang idnya cocok
    setActivities(activities.filter(activity => activity.id !== id));
  }

  // ---- FUNGSI: handle perubahan input ----
  function handleInputChange(e) {
    setInputNama(e.target.value);
    if (errorMsg) setErrorMsg(''); // hapus error saat user mulai mengetik
  }

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="app-container">

      {/* ===== HEADER ===== */}
      <header className="app-header">
        <div className="header-badge">Tugas Praktikum React</div>
        <h1 className="app-title">
          Daftar Aktivitas<br />
          <span className="title-accent">Mahasiswa</span>
        </h1>
        <p className="app-subtitle">
          Catat dan kelola semua aktivitasmu dalam satu tempat
        </p>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="app-main">

        {/* ===== FORM TAMBAH AKTIVITAS ===== */}
        <section className="form-section">
          <h2 className="section-title">
            <span className="section-icon">+</span>
            Tambah Aktivitas
          </h2>
          <form className="input-form" onSubmit={handleTambah}>
            <div className="input-wrapper">
              <input
                type="text"
                className={`input-field ${errorMsg ? 'input-error' : ''}`}
                placeholder="Contoh: Mengerjakan tugas algoritma..."
                value={inputNama}
                onChange={handleInputChange}
                maxLength={100}
                autoComplete="off"
              />
              <button type="submit" className="btn-tambah">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Tambah
              </button>
            </div>

            {/* Conditional rendering: pesan error validasi */}
            {errorMsg && (
              <p className="error-msg">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {errorMsg}
              </p>
            )}

            <p className="input-hint">{inputNama.length}/100 karakter</p>
          </form>
        </section>

        {/* ===== DAFTAR AKTIVITAS ===== */}
        <section className="list-section">
          {/* Header daftar + counter */}
          <div className="list-header">
            <h2 className="section-title">
              <span className="section-icon">📋</span>
              Daftar Aktivitas
            </h2>
            {/* Conditional rendering: badge jumlah hanya muncul jika ada item */}
            {activities.length > 0 && (
              <span className="activity-count">
                {activities.length} aktivitas
              </span>
            )}
          </div>

          {/* Child Component: ActivityList
              Data dikirim melalui PROPS:
              - activities : state array dari App
              - onHapus    : fungsi hapus dari App               */}
          <ActivityList
            activities={activities}
            onHapus={handleHapus}
          />
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer className="app-footer">
        <p>Dibuat menggunakan <strong>React JS</strong> · Praktikum Pemrograman Web</p>
      </footer>

    </div>
  );
}

export default App;

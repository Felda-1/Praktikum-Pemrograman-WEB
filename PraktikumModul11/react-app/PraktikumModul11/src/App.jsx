////12.4.3 Konsep Component & JSX

/*
function App() {
return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}
*/

/*
const name = "John Doe";

function App() {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
} 
*/

/*
function Header() {
  return (
    <header>
      <h1>Ini Header</h1>
    </header>
  );
}
*/

/*
import Header from "./Header";
function App() {
  return (
    <div>
      <Header />
      <p>Konten Utama Aplikasi</p>
    </div>
  );
}
*/

//Eksperimen Praktikum 12.4.3 Konsep Component & JSX 
/*
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const nama = "Felda";

  return (
    <div>
      <Header />

      <h2>Halo, {nama} 👋</h2>

      <p>
        Ini adalah praktikum React JS tentang
        component dan JSX.
      </p>

      <Footer />
    </div>
  );
}
*/


//// 12.4.4 Props: Mengirim Data antar Component 

/*
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Profile name="Alyssa" role="UX Desainer" />
    </div>
  );
}
*/

//Eksperimen Praktikum 12.4.4 Props: Mengirim Data antar Component
/*
import Profile from "./Profile";

function App() {
  return (
    <div>
      <h1>Data Mahasiswa</h1>

      <Profile
        name="Felda"
        role="Mahasiswa"
        age="19"
        email="felda@gmail.com"
      />

      <Profile
        name="Alya"
        role="UI/UX Designer"
        age="20"
        email="alya@gmail.com"
      />

      <Profile
        name="Rizky"
        role="Frontend Developer"
        age="21"
        email="rizky@gmail.com"
      />
    </div>
  );
}
*/


//// 12.4.5 State & Interaktivitas Dasar 

/*
import { useState } from "react";

function  App() {
  const [count,setCount] = useState(0);

  return (
    <div>
      <p>Nilai count: {count}</p>
    </div>
  );
}
*/

//Menambahkan interaktivitas dengan event 
/*
import { useState } from "react";

function  App() {
  const [count,setCount] = useState(0);

  return (
    <div>
      <p>Nilai count: {count}</p>
      <button onClick = {() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
*/

//Menggunakan state pada input
/*import { useState } from "react";

function  App() {
  const [count,setCount] = useState(0);
  const [name, setName] = useState("")

  return (
    <div>
      <p>Nilai count: {count}</p>
      <button onClick = {() => setCount(count + 1)}>Tambah</button>

      <input 
        type="text" 
        value = {name}
        onChange = {(e) => setName(e.target.value)}
      />

      <p>Nama: {name}</p>
    </div>
  );
}*/

//Eksperimen Praktikum 12.4.5 State & Interaktivitas Dasar 
/*
import { useState } from "react";

function App() {

  // State pertama
  const [count, setCount] = useState(0);

  // State kedua
  const [name, setName] = useState("");

  // State ketiga untuk tampil/sembunyi teks
  const [showText, setShowText] = useState(true);

  // Fungsi reset
  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Praktikum React State</h1>

      {/* STATE COUNT */ /*}
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>

      <button onClick={() => setCount(count - 1)}>
        Kurang
      </button>

      <button onClick={resetCount}>
        Reset
      </button>

      <hr />

      {/* STATE INPUT */ /*}
      <h2>Input Nama</h2>

      <input
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Halo, {name}</p>

      <hr />

      {/* CONDITIONAL RENDERING */ /*}
      <button onClick={() => setShowText(!showText)}>
        Tampil / Sembunyikan Teks
      </button>

      {
        showText && (
          <p>
            Ini adalah teks yang bisa disembunyikan.
          </p>
        )
      }

    </div>
  );
}
*/

////12.4.6 Rendering List & Conditional Rendering 

/*import { useState } from "react";

function App(){
  const [items, setItems] = useState([
    "Belajar React",
    "Mengerjakan Praktikum",
    "Riview Materi"
  ]);

  return (
    <div>
      <h3>Daftar Aktivitas</h3>
    </div>
  );
}*/

/*import { useState } from "react";

function App(){
  const [items, setItems] = useState([
    "Belajar React",
    "Mengerjakan Praktikum",
    "Riview Materi"
  ]);

  return (
    <div>
      <h3>Daftar Aktivitas</h3>
      <ul>
        {items.map((item, index) => (
          <li key = {index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}*/


/*import { useState } from "react";

function App(){
  const [items, setItems] = useState([
    "Belajar React",
    "Mengerjakan Praktikum",
    "Riview Materi"
  ]);

  const [showList, setShowList] = useState(true);

  return (
    <div>
      <h3>Daftar Aktivitas</h3>
      {showList &&(
        <ul>
        {items.map((item, index) => (
          <li key = {index}>{item}</li>
        ))}
      </ul>
      )}
      {items.length === 0 ?(
        <p>Data tidak tersedia</p>
      ) : (
        <p>Jumlah aktivitas: {items.length}</p>
      )}

      <button onClick={() => setShowList(!showList)}>
        {showList ? "Sembunyikan" : "Tampilkan"}
      </button>
    </div>
  );
}*/


//Eksperimen Praktikum 12.4.6 Rendering List & Conditional Rendering

import { useState } from "react";

function App() {

  // State array
  const [activities, setActivities] = useState([
    "Belajar React",
    "Mengerjakan Tugas",
    "Olahraga"
  ]);

  // State boolean
  const [showList, setShowList] = useState(true);

  // Tambah item baru
  const addActivity = () => {
    setActivities([
      ...activities,
      "Membaca Buku"
    ]);
  };

  // Hapus item
  const deleteActivity = (indexHapus) => {
    const newActivities = activities.filter(
      (_, index) => index !== indexHapus
    );

    setActivities(newActivities);
  };

  return (
    <div>
      <h1>Daftar Aktivitas Mahasiswa</h1>

      {/* Tombol tampil/sembunyi */}
      <button
        onClick={() =>
          setShowList(!showList)
        }
      >
        {showList
          ? "Sembunyikan List"
          : "Tampilkan List"}
      </button>

      {/* Tombol tambah */}
      <button onClick={addActivity}>
        Tambah Aktivitas
      </button>

      <hr />

      {/* Conditional Rendering */}
      {
        showList && (
          activities.length > 0 ? (

            <ul>
              {activities.map((item, index) => (
                <li key={index}>
                  {item}
                  <button
                    onClick={() =>
                      deleteActivity(index)
                    }
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>

          ) : (

            <p>
              Aktivitas kosong 
            </p>

          )

        )
      }

      {/* Ubah tampilan berdasarkan kondisi */}
      <h3
        style={{
          color:
            activities.length > 3
              ? "green"
              : "red"
        }}
      >
        Total Aktivitas:
        {activities.length}
      </h3>

    </div>
  );
}

export default App;


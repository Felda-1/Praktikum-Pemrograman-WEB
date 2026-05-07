

/********************
DATA STORAGE
********************/
let data = JSON.parse(localStorage.getItem('keuangan')) || [];


function simpanData() {
    localStorage.setItem('keuangan', JSON.stringify(data));
}


/********************
RENDER KEUANGAN
********************/
function renderKeuangan() {
    const list = document.getElementById('list');
    if (!list) return;


    list.innerHTML = '';
    data.forEach((d, i) => {
        list.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${d.ket}</td>
<td>${d.jenis}</td>
<td>Rp ${d.nominal}</td>
</tr>`;
    });
}


function tambahData(e) {
    e.preventDefault();
    const ket = document.getElementById('ket').value;
    const jenis = document.getElementById('jenis').value;
    const nominal = Number(document.getElementById('nominal').value);


    data.push({ ket, jenis, nominal });
    simpanData();
    renderKeuangan();
    e.target.reset();
}


/********************
DASHBOARD & ANALISIS
********************/
function hitungRingkasan() {
    let masuk = 0,
        keluar = 0;
    data.forEach(d => {
        if (d.jenis === 'Masuk') masuk += d.nominal;
        else keluar += d.nominal;
    });


    if (document.getElementById('masuk')) masukEl.innerText = masuk;
    if (document.getElementById('keluar')) keluarEl.innerText = keluar;
    if (document.getElementById('saldo')) saldo.innerText = masuk - keluar;
    if (document.getElementById('jumlah')) jumlah.innerText = data.length;


    if (document.getElementById('aMasuk')) aMasuk.innerText = masuk;
    if (document.getElementById('aKeluar')) aKeluar.innerText = keluar;
    if (document.getElementById('aSaldo')) aSaldo.innerText = masuk - keluar;


    if (document.getElementById('saldoRealtime')) saldoRealtime.innerText = masuk - keluar;
}


/********************
SMART PRICING
********************/
function hitungHarga() {
    const modalVal = Number(document.getElementById('modal').value);
    const marginVal = Number(document.getElementById('margin').value);


    if (isNaN(modalVal) || isNaN(marginVal)) {
        hasil.innerText = '0';
        return;
    }


    const harga = modalVal + (modalVal * marginVal / 100);
    hasil.innerText = harga;
}
hitungRingkasan();
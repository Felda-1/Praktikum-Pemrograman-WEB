//Praktikum 14 – Callback Dasar
function prosesData(data, callback) {
    console.log("Data diterima:", data);
    callback(data);
}
function tampilkanData(data) {
    console.log("Menampilkan Data:", data);
}
prosesData("Belajar Callback!", tampilkanData);


//Praktikum 15 – Callback dengan Arrow Function
function prosesData(data, callback) {
    console.log("Data diterima:", data);
    callback(data);
}
function tampilkanData(data) {
    console.log("Menampilkan Data:", data);
}
prosesData ("Callback arrow", (data) => {
    console.log("Arrow callback:", data);
});
prosesData("belajar callback", tampilkanData);
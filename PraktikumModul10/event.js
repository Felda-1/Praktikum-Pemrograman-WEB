//Praktikum 26 – Event Handling Klik Dasar
const app=document.getElementById("app");
app.innerHTML=`
    <h1>Event Handling</h1>
    <button id="btn">Klik Saya</button>
`;
const button=document.getElementById("btnKlik");
button.addEventListener("click", function() {
    alert("Tombol diklik!");
});


//Praktikum 27 – Event Handler Menggunakan Function
const app=document.getElementById("app");
app.innerHTML=`
    <button id="btnKlik">Klik Saya</button>
`;

const button=document.getElementById("btnKlik");
function handleClick() {
    alert("functional handleClick dipanggil");
}
button.addEventListener("click", handleClick);


//Praktikum 28 – Mengenal this Context
const app=document.getElementById("app");
app.innerHTML=`
    <button id="btnKlik">Klik Saya</button>
`;
const button=document.getElementById("btnKlik");
button.addEventListener("click", function() {
    console.log(this); // Akan merujuk pada elemen button
    alert("Tombol sudah diklik!");
});


//Praktikum 29 – Event Handler dengan Parameter
const app=document.getElementById("app");
app.innerHTML=`
    <button id="btnKlik">Klik Saya</button>
`;
const button=document.getElementById("btnKlik");
button.addEventListener("click", () => {
    console.log(this);
});
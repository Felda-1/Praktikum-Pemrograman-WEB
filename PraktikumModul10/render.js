//Praktikum 24 – Menampilkan Data Array ke HTML
const products = ["Laptop", "Smartphone", "Tablet"];
const app = document.getElementById("app");
app.innerHTML = `
    <ul>
        <li>${products[0]}</li>
        <li>${products[1]}</li>
        <li>${products[2]}</li>
    </ul>
`;

//Praktikum 24 – Menampilkan Data Array ke HTML dengan Looping
const products = ["Laptop", "Smartphone", "Tablet"];
const app = document.getElementById("app");
const listHTML = products
    .map(item => `<li>${item}</li>`)
    .join("");
app.innerHTML = `<ul>${listHTML}</ul>`;


//Praktikum 25 – Menampilkan Data Object ke HTML
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 500 },
    { name: "Tablet", price: 300 }
];

const app = document.getElementById("app");
const listHTML = products
    .map(item => `
        <div>
            <h4>${item.name}</h4>
            <p>Harga: $${item.price}</p>
        </div>
    `)
    .join("");
app.innerHTML = listHTML;
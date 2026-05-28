//Praktikum 22 – Component Sederhana (Vanilla JS)
export function Counter() {
    let count = 0;

    function increment() {
        count++;
        render();
    }

    function render() {
        document.getElementById("app").innerHTML =`
        <p>count: ${count}</p>
        <button id="btn">Tambah</button>
        `;

        document.getElementById("btn").onclick = increment;
    }
    render();
}

//Praktikum 23 – Component Reusable
export function Counter(title) {
    let count = 0;

    function increment() {
        count++;
        render();
    }

    function render() {
        document.getElementById("app").innerHTML =`
        <h1>${title}</h1>
        <p>count: ${count}</p>
        <button id="btn">Tambah</button>
        `;

        document.getElementById("btn").onclick = increment;
    }
    render();
}
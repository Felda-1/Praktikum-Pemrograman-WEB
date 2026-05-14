//Praktikum 16 Closure Dasar
function buatCounter() {
    let coun = 0;
    return function() {
        coun++;
        console.log(coun);
    };
}
const counter = buatCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3


//Praktikum 17 Closure sebagai State
function buatState(nilaiAwal) {
    let state = nilaiAwal;
    return function(nilaiBaru) {
        if (nilaiBaru !== undefined) {
            state = nilaiBaru;
        }
        return state;
    };
}
const hitung = buatState(0);
console.log(hitung());
console.log(hitung(5));
console.log(hitung());

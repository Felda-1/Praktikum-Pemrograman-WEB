//Praktikum 10 map()
const number = [1, 2, 3, 4, 5];
const hasilMap = number.map(function(n) {
    return n * 2;
});
console.log("Map:", hasilMap); // Output: [2, 4, 6, 8, 10]

//Praktikum 11 filter()
const number = [1, 2, 3, 4, 5];
const hasilFilter = number.filter(function(n) {
    return n % 2 === 0;
});
console.log("Filter:", hasilFilter); // Output: [2, 4]

//Praktikum 12 reduce()
const number = [1, 2, 3, 4, 5];
const hasilReduce = number.reduce(function(acc, n) {
    return acc + n;
}, 0);
console.log("Reduce:", hasilReduce); // Output: 15

//Praktikum 13 (Pure vs Non-Pure Functions)
const tambah = (a, b) => a + b;
console.log("Pure:", tambah(3, 4)); // Output: 7

let nilai = 0;
function tambahGlobal(x) {
    nilai += x;
    return nilai;
}
console.log("Non-Pure:", tambahGlobal(5)); // Output: 5
console.log("Non-Pure:", tambahGlobal(5)); // Output: 10
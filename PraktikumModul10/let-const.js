/*Praktikum 1 (penggunaan Let)
let counter = 1
counter = 2
console.log(counter)
*/

/*Praktikum 2 (Penggunaan const)
const MAX = 10;
MAX = 20; // error: Assignment to constant variable.
*/

//Praktikum 3 (Contoh block scope) :
if (true) {
    let angka = 5;
    console.log(angka);
}
console.log(angka); // error: angka is not defined
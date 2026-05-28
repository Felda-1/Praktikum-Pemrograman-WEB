//Praktikum 5 (Object Destructuring)
const user = {name: 'John Doe',age: 17};
const {name, age} = user;
console.log(name, age); // Output: John Doe 17

//Praktikum 6 (Array Destructuring)
const angka = [1, 2, 3];
const [a, b, c] = angka;
console.log(a, b, c); // Output: 1 2 3

//Praktikum 7 (Spread Operator)
const data = [1, 2, 3];
const dataBaru = [...data, 4, 5];
console.log(data); // Output: [1, 2, 3]
console.log(dataBaru); // Output: [1, 2, 3, 4, 5]
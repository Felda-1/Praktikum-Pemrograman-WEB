//Praktikum 8 – Immutability pada Array
let tasks = ['Belajar JavaScript', 'Belajar ES6'];

tasks.push('Belajar React'); // Mengubah array tasks secara langsung
console.log("Mutable:", tasks);

let tasks = ['Belajar JavaScript', 'Belajar ES6'];
let newTasks = [...tasks, 'Belajar React']; 
console.log("original:", tasks); 
console.log("immutable:", newTasks); 

let state = {
    count: 0,
};

function increment() {
    state = {   
    ... state,
    count: state.count + 1,
};

console.log(state);
}
increment();

increment();

increment();

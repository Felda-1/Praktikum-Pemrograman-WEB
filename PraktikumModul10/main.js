//Praktikum 21 – Module Dasar (export & import)
import{tambah, kurang} from './utils.js';

console.log(tambah(5, 3));
console.log(kurang(5, 3));

//Praktikum 22 – Component Sederhana (Vanilla JS)
import { Counter } from './counterComponent.js';
Counter();

//Praktikum 23 – Component Reusable
import { Counter } from './counterComponent.js';

Counter("Counter Pertama");
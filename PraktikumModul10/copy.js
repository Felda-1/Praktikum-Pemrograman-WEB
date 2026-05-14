//Praktikum 30 – Shallow Copy pada Object
const user = {
    name: "John Doe",
    address: {
        street: "jalan Sukabirus Nomor 34",
        city: "Bandung",
        country: "Indonesia"
    }
};
const userCopy = { ...user };
userCopy.name = "Jane";
userCopy.address.city = "Jakarta";
console.log("user asli:", user);
console.log("user copy:", userCopy);

//Praktikum 31 – Shallow Copy pada Array
const numbers = [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}];
const numbersCopy = [...numbers];

numbersCopy[0].value = 10;
console.log("numbers asli:", numbers);
console.log("numbers copy:", numbersCopy);

//Praktikum 32 – Deep Copy dengan JSON
const userDeep = JSON.parse(JSON.stringify(user));
userDeep.address.city = "Jakarta";
console.log("user asli:", user);
console.log("user Deep copy:", userDeep);
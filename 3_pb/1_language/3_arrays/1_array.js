// Kollektion, inder Regel gleicher Typ
// const arr = [];

const auto1 = "Porsche";
const auto2 = "Audi";
const auto3 = "Tesla";
const autos = ["Porsche", "Audi", "Tesla", "BMW"];
console.table(autos);
autos[2] = "BMW";
console.table(autos);
console.log(autos[2]);

const toDos = [
    {title: "sleep", isDone: true},
    {title: "eat", isDone: true},
    {title: "code", isDone: false},
    {title: "repeat", isDone: true},
]
console.table(toDos);
console.log(toDos[1].isDone)

// value types =  numbers, strings all primi

// pass by value
let x = 5;
let y = x;
console.log(x, y);
y++;
console.log(x, y);

// pass by reference
const arr1 = ["BMW"];
const arr2 = arr1;
//arr2 = [];
console.log(arr1, arr2);
arr2[0] = "Audi";
console.log(arr1, arr2);

const result = autos.indexOf("BMW");
const result2 = autos.indexOf("Ferrari");
console.log(result);
console.log(result2);

// In React
const autos2 = [...autos, "Lambo"];
console.log(autos2);

// push();

// pop();
// console.log(autos.pop()); return the delete element;

// unshift();
console.log(autos.unshift("VW"));
console.table(autos);

// shift();
console.log(autos.shift());
console.table(autos);

// reverse();
console.table(autos.reverse());

// slice(); can also be used for string. Instead of substring, slice is more modern
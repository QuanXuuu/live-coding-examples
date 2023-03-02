// falsy

// boolean - true and false;

console.log(true && true);

// truthy, falsy
console.log(5 || false);
console.log(5 && true);
console.log(0 || false);
console.log(0 && true);

// short-circuit evalution
console.log(5 && true);
console.log(5 && 8);
console.log(5 || true);
console.log(5 || 8);
console.log(5 && 0);
console.log(0 || 7);
console.log(5 && "Hans");

// short-circuit Techniken
// fallback value
// const port = process.env.PORT || 3000;
// const username = user.name || "Guest";

// conditional expressions
// toDoItem.isDone && doStuff();
// !toDoItem.isDone && doOtherStuff();
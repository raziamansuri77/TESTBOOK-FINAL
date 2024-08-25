// let a = 5;
// function num(a, b) {
//   //   b = 6;
//   //   console.log(a + b);
//   return a + b;
// }
// console.log(num(5, 2));
// const a = () => {
//   console.log(3 + 4);
// };
// a();

// Event Listener

// printHello();
// function printHello() {
//   console.log("hello");
// }

// function sum(a, b, c) {
//   return a + b;
// }
// function curry(f) {
//   return function (a) {
//     return function (b) {
//       // return function (c) {
//       return f(a, b);
//       // };
//       // return f(a, b);
//     };
//   };
// }
// let curriedSum = curry(sum);

// console.log(curriedSum(2)(3));

// sum(2, 3);

// Callback function, passed as a parameter in the higher order function
// function callbackFunction() {
//   console.log("I am  a callback function");
// }

// // higher order function
// function higherOrderFunction(func) {
//   console.log("I am higher order function");
//   func();
// }

// higherOrderFunction(callbackFunction);
// var preNumber = 2;

// function addValue(newNumber) {
//   return (preNumber += newNumber);
// }
// console.log(addValue(3));
let globalVariable = 10;

function impureFunction(x) {
  globalVariable += x; // Modifying a global variable
  return Math.random() * x; // Producing different results for the same input
}

console.log(impureFunction(5)); // Output depends on globalVariable and random number generator
console.log(globalVariable);
// Output depends on previous function calls

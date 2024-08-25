// funcA = () => {
//   console.log("A function");
// };
// funcB = () => {
//   console.log("B function");
// };
// funcA();
// funcB();
// ---------------second method---------------------
// funcA = (
//   funcB = () => {
//     console.log("B function");
//   }
// ) => {
//   setTimeout(() => {
//     console.log("A function");
//     funcB();
//   }, 2000);
// };

// funcA();

// --------------------------------------
// let num = 12;
// function Sum() {
//   console.log("sum:" + num);
// }
// Sum(15);

addition(10, function (addres) {
  console.log("addres inside callback function", addres);
});

function addition(val, callback) {
  //   let addres = val + 15;
  subtraction(addres,function(subtres))
  //   return callback(addres);
}
function suntraction(val, callback) {
  let addres = val + 15;
  return callback(addres);
}

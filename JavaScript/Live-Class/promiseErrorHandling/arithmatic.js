arithmaticPromise = new Promise(function (resolve, reject) {
  resolve(5);
});
arithmaticPromise
  .then(add)
  .then(sub)
  .then(multi)
  .then(division)
  .then((data) => console.log(data));
function add(val) {
  return val + 5;
}
function sub(val) {
  return val - 2;
}
function multi(val) {
  return val * 5;
}
function division(val) {
  return val / 2;
}

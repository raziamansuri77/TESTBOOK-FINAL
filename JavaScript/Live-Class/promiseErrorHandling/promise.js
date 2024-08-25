let myPromise = new Promise(function (resolve, reject) {
  let a = 9;
  if (a == 19) {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(() => console.log("Resolved"))
  .catch(() => console.log("Rejected"));

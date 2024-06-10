function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

console.log(getData());

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("SUPER !!!!");
  });
console.log("ligne 17");

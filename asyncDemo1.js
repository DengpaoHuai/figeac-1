function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

const faireMonAppel = async () => {
  const result = await getData();
  console.log(result);
};
faireMonAppel();
console.log("bloqué");

const displayToto = async () => {
  return "toto";
};
displayToto().then((data) => {
  console.log(data);
});

const result1 = await displayToto();
console.log(result1);

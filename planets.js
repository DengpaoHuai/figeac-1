const app = document.getElementById("app");

const displayPlanet = (planet) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = planet.name;
  div.appendChild(h2);
  app.appendChild(div);
};

fetch("https://swapi.dev/api/planets")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((element) => {
      displayPlanet(element);
    });
  })
  .catch((err) => console.log(err));

const getData = async () => {
  const response = await fetch("https://swapi.dev/api/planets");
  const data = await response.json();
  console.log(data);
};

try {
  getData();
} catch (error) {}

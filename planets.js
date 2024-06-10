const app = document.getElementById("app");
let page = 1;

const displayPlanet = (planet) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = planet.name;
  div.appendChild(h2);
  app.appendChild(div);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getData = async (page = 1) => {
  await sleep(2000);
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  const data = await response.json();
  app.innerHTML = "";
  data.results.forEach((planet) => {
    displayPlanet(planet);
  });
  displayButtons();
};

const displayButtons = () => {
  const buttonPrevious = document.createElement("button");
  buttonPrevious.innerText = "Previous";
  buttonPrevious.addEventListener("click", () => {
    page--;
    getData(page);
  });
  app.appendChild(buttonPrevious);
  const button = document.createElement("button");
  button.innerText = "Next";
  button.addEventListener("click", () => {
    page++;
    getData(page);
  });
  app.appendChild(button);
};

displayButtons();

try {
  getData();
} catch (error) {}

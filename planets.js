const app = document.getElementById("app");
let page = 1;

const displayLoader = () => {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  app.appendChild(loader);
};

const displayPlanet = (planet) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = planet.name;
  div.appendChild(h2);
  app.appendChild(div);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getData = async (page = 1) => {
  app.innerHTML = "";
  displayLoader();
  const response = await fetch("https://swapi.dev/api/planets?page=" + page);
  const data = await response.json();
  app.innerHTML = "";
  data.results.forEach((planet) => {
    displayPlanet(planet);
  });
  displayButtons(data);
};

const displayButtons = (planetResponse) => {
  const buttonPrevious = document.createElement("button");
  buttonPrevious.innerText = "Previous";
  buttonPrevious.addEventListener("click", () => {
    page--;
    getData(page);
  });
  buttonPrevious.disabled = planetResponse.previous ? false : true;
  app.appendChild(buttonPrevious);
  const button = document.createElement("button");
  button.innerText = "Next";
  button.addEventListener("click", () => {
    page++;
    getData(page);
  });
  button.disabled = planetResponse.next ? false : true;
  app.appendChild(button);
};

try {
  getData();
} catch (error) {}

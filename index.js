const books = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
    price: 20,
    rating: 4.5,
    available: true,
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
    price: 15,
    rating: 4.2,
    available: true,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: 25,
    rating: 4.8,
    available: false,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    price: 18,
    rating: 4.6,
    available: true,
  },
  {
    id: 5,
    title: "The Bell Jar",
    author: "Sylvia Plath",
    price: 22,
    rating: 4.3,
    available: true,
  },
  {
    id: 6,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    price: 30,
    rating: 4.7,
    available: true,
  },
];

const addBook = (id, title, author, price, rating, available) => {
  books.push({
    id: id,
    title: title,
    author: author,
    price,
    rating,
    available,
  });
};

addBook(7, "The", "Kane", 40, 4.9, true);

const app = document.getElementById("app");

const displayBook = (book) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.innerText = book.title;
  div.appendChild(h2);
  const button = document.createElement("button");
  button.innerText = "Edit";
  button.addEventListener("click", (e) => console.log(e));
  div.appendChild(button);
  app.appendChild(div);
};
books.forEach((book) => {
  displayBook(book);
});

const customFind = (search) =>
  books.filter((book) => book.title.includes(search));

document.addEventListener("scroll", (e) => console.log(e));

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  /* const search = document.getElementById("search");
  console.log(search.value);*/
  /*
  const valie = searchForm.search.value;
  console.log(valie);*/

  const formData = new FormData(e.target);
  const values = Object.fromEntries(formData);
  console.log(values);

  app.innerHTML = "";
  const bookAvecUnS = customFind(values.search);
  bookAvecUnS.forEach((book) => {
    displayBook(book);
  });
});

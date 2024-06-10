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

//books.forEach((book) => console.log(book));

const customFind = (search) =>
  books.filter((book) => book.title.includes(search));

const express = require("express");
const {
  addBooks,
  allBooks,
  editBooks,
  oneBooks,
  deleteBooks,
} = require("../controllers/books.controller");

const route = express.Router();

route.get("/", (req, res) => {
  res.json("its working...");
});

route.post("/addBook", addBooks);
route.get("/getAllBooks", allBooks);
route.post("/bookEditById", editBooks);
route.post("/bookById", oneBooks);
route.post("/deletebookById", deleteBooks);

module.exports = route;

const express = require("express");
const booksRoute = require("./router/books.router");
const dbConnection = require("./lib/dbConnection.js");
var cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors())

const port = 9000;
app.listen(port, () => {
  console.log(`the server running at http://localhost:${port}`);
});
dbConnection();
app.use("/", booksRoute);

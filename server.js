require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// middleware
app.use("/places", placesController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// GET /* (wildcard/catch-all route)
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found Page</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});

module.exports = app;

const express = require("express");
const cors = require("cors");

const app = express();

// HIDE THIS
const API_KEY = "08a2ef909c8b041efdff91b583f6df9b";

app.use(cors());

app.listen(8000, () => {
  console.log("Server started!");
});

app.route("/getKey").get((req, res) => {
  const requestedCity = req.params["city"];
  res.send({ key: API_KEY });
});

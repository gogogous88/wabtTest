const express = require("express");

const app = express();

const path = require("path");

// app.get("/", (req, res) => res.send("hello world"));

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000);

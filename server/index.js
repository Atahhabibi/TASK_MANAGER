const express = require("express");
const { tasks } = require("./FILE/task");
const { readFile, writeFile } = require("fs");
const cors = require('cors');


const app = express();

app.use(cors())

app.get("/tasks", (req, res) => {
  res.status(200).json({ status: "success", data: tasks });
});

app.listen(5000, (req, res) => {
  console.log("Server start in port : 5000");
});

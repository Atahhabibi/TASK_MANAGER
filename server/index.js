const express = require("express");
const { tasks } = require("./FILE/task");
const { readFile, writeFile } = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/tasks", (req, res) => {
  res.status(200).json({ status: "success", data: tasks });
});
app.post("/api/tasks", (req, res) => {
  const newItem = req.body;
  tasks.push(newItem);
  res.status(200).json({ status: "success", tasks });
});

app.listen(5000, (req, res) => {
  console.log("Server start in port : 5000");
});

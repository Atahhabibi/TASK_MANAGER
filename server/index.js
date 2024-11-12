const express = require("express");
let { tasks } = require("./FILE/task");
const { readFile, writeFile } = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/tasks", (req, res) => {
  res.status(200).json({ status: "success", data: tasks });
});
app.post("/api/tasks", (req, res) => {
  const newItem = req.body;
  tasks.push(newItem);
  res.status(200).json({ status: "success", tasks });
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    let newTasks = tasks.filter((item) => item.id !== id);
    tasks=newTasks; 

    res.status(200).json({ status: "success", newTasks });
  } else {
    res.status(404).json({ status: "item not found" });
  }
});

app.patch("/api/tasks/:id", (req, res) => {
  const id = req.params.id;
  const newItem = req.body;

  const index = tasks.findIndex((item) => item.id === id);

  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...newItem };

    res.status(200).json({ status: "success", item: tasks[index] });
  } else {
    res.status(404).json({ status: "item not found" });
  }
});

app.listen(5000, (req, res) => {
  console.log("Server start in port : 5000");
});

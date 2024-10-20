const { Router } = require("express");
const mongoose = require("mongoose");
const { bookModel } = require("../models/task.model");

const bookRouter = Router();

bookRouter.get("/read", async (req, res) => {
  const tasks = await bookModel.find();
  res.status(200).json({ msg: tasks });
});

bookRouter.post("/create", async (req, res) => {
  const { title, author, publishedYear, genre } = req.body;

  const createdTasks = new bookModel({
    title,
    author,
    publishedYear,
    genre,
  });
s
  try {
    await createdTasks.save();
    res.send("created successfully");
  } catch (err) {
    console.log(err);
    res.send("something went wrong!");
  }
});

bookRouter.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;

  const editTask = await bookModel.findByIdAndUpdate(
    { _id: id, userId: req.body.userId },
    { ...req.body }
  );

  if (editTask) {
    res.send("edited successfully");
  } else {
    res.send("error while editing");
  }
});

bookRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const deleteTask = await bookModel.findByIdAndDelete({
    _id: id,
    userId: req.body.userId,
  });

  if (deleteTask) {
    res.send("deleted successfully");
  } else {
    res.send("error while editing");
  }
});

module.exports = { bookRouter };

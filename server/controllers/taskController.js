
const Task = require("../models/Task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const createTask = async (req, res) => {
  const taskData = req.body;
  try {
    const tasks = await Task.create(taskData);
    res.status(201).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const taskData = req.body;
  try {
    const task = await Task.findByIdAndUpdate(taskId, taskData, { new: true });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteTask = async (req, res) => {
  console.log(req.params,"reqparams");
  console.log(req.params.id,typeof(req.params.id));
  const taskId = req.params.id;
  try {
    const tasks = await Task.findByIdAndDelete(taskId);
    console.log(tasks);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };

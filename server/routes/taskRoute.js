const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");


const validateIdUniqueness = async (req, res, next) => {
  const existingTask = await Task.findOne({ id: req.body.id });
  if (existingTask) {
    return res.status(400).json({ error: "ID must be unique" });
  }
  next();
};


const validateTaskName = (req, res, next) => {
  const taskName = req.body.taskName;
  if (!taskName || taskName.trim() === "") {
    return res.status(400).json({ error: "Task Name is required" });
  }
  next();
};

// CRUD operations
router.get("/", getAllTasks);

router.post(
  "/",
  validateIdUniqueness,
  validateTaskName,
  createTask
);

router.put(
  "/:id",
  validateTaskName,
  updateTask
);

router.delete("/:id", deleteTask);

module.exports = router;

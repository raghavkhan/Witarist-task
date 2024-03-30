const mongoose = require("mongoose");

const SchemaObject = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  taskName: {
    type: String,
    required: [true, "Please provide a task name"],
    minLength: 6,
    maxLength: 50,
  },
  priority: {
    type: String,
    required: [true, "Please provide task priority"],
    enum: ["low", "medium", "high"],
  },
};
const TaskSchema = new mongoose.Schema(SchemaObject, { timestamps: true });

const model = mongoose.model("Task", TaskSchema);
module.exports = model;

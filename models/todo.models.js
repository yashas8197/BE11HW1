const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
    },
  },
  { timestamps: true },
);

const Todo = mongoose.model("Todo", todosSchema);

module.export = Todo;

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  employeeProfile: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  telphoneNumber: {
    type: Number,
  },
  address: {
    type: String,
    required: true,
  },
});

const EmployeeCard = mongoose.model("EmployeeCard", employeeSchema);

module.export = EmployeeCard;

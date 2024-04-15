const mongoose = require("mongoose");

const creditCardSchema = new mongoose.Schema({
  creditCardName: {
    type: String,
    required: true,
  },
  creditCardNumber: {
    type: Number,
    required: true,
  },
  creditCardDate: {
    type: Date,
    required: true,
  },
  creditCardUserName: {
    type: String,
    required: true,
  },
  creditCardLogo: {
    type: String,
    required: true,
  },
});

const BankCreditCard = mongoose.model("BankCreditCard", creditCardSchema);

module.exports = BankCreditCard;

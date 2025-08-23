const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: [true, "Please add the contact first name"],
    },
    lastname: {
      type: String,
      require: [true, "Please add the contact last name"],
    },
    participation: {
      type: Number,
      require: [true, "Please add the contact participation"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);

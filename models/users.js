const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "�п�J�z���W�r"],
  },
  email: {
    type: String,
    required: [true, "�п�J�z�� Email"],
    unique: true,
    lowercase: true,
    select: false,
  },
  photo: String,
},
{ versionKey: false });

const User = mongoose.model("user", userSchema);

module.exports = User;
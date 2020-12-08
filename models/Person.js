const { Schema, model } = require("mongoose");
const PersonSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  disappearanceDate: {
    type: Date,
    required: true,
  },
  photos: {
    type: Array,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = model("Person", PersonSchema);

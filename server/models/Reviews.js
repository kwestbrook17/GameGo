const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  content: {
    type: String,
    require: true,
    trim: true,
  },
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reviews = mongoose.model("Reviews", ReviewSchema);

module.exports = Reviews;

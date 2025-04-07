import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: [String],
  sold: { type: Boolean, default: false },
});

export default mongoose.model("Item", itemSchema);

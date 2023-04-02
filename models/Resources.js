import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  service: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Resource =
  mongoose.models?.Resource || mongoose.model("Resource", ResourceSchema);

export default Resource;

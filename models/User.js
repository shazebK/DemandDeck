import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  urls: {
    type: [String],
  },
  services: [String],
  experiences: [String],
  achievements: [String],
  demandCreated: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Demand",
    },
  ],
  resources: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  ],
  businesses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
    },
  ],
});

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;

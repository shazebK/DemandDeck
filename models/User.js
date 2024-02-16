import mongoose from "mongoose";
import { ResourceClassifnSchema } from "./Resource";

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
  resourcesClassified: { type: ResourceClassifnSchema },
  businesses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
    },
  ],
  location: String,
});

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;

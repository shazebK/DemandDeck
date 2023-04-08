import mongoose from "mongoose";
import { RatingSchema } from "./Rating";

export const BusinessSchema = new mongoose.Schema({
  title: String,
  description: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  benefeciaries: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  // credits: Number,
  // stake: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Stake",
  // },
  onRequest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Demand",
  },
  start: Date,
  end: Date,
  reviews: [RatingSchema],
  resourcesNeeded: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  ],
});

const Business =
  mongoose.models?.Business || mongoose.model("Business", BusinessSchema);

export default Business;

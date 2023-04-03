import mongoose from "mongoose";
import { ResponseSchema } from "./Response";

const DemandSchema = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  active: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  requesters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  location: String,

  responses: [ResponseSchema],
});

const Demand =
  mongoose.models?.Demand || mongoose.model("Demand", DemandSchema);

export default Demand;

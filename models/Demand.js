import mongoose from "mongoose";
import { ResponseSchema } from "./Response";
import { ResourceProposalSchema } from "./Resource";

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
    ref: "Business",
  },

  proposals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proposal",
    },
  ],

  location: String,
  tags: [String],
  responses: [ResponseSchema],
  resoursesPromised: [ResourceProposalSchema],
});

const Demand =
  mongoose.models?.Demand || mongoose.model("Demand", DemandSchema);

export default Demand;

import mongoose from "mongoose";

const ProposalSchema = new mongoose.Schema({
  description: {
    type: String,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  demand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Demand",
  },

  resources: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  ],

  status: String, // enum -> req, acc, rej, inqueue

  resourcesNeeded: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  ],
});

const Proposal =
  mongoose.models?.Proposal || mongoose.model("Proposal", ProposalSchema);

export default Proposal;

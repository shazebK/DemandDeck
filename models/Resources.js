import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  service: {
    type: String,
  },
  basePrice: Number,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const ResourceClassifnSchema = new mongoose.Schema(
  {
    available: [
      {
        resource: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Resource",
        },
        quantity: Number,
      },
    ],
    proposed: [
      {
        resource: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Resource",
        },
        demand: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Demand",
        },
        quantity: Number,
        price: Number,
      },
    ],
    allocated: [
      {
        resource: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Resource",
        },
        business: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Business",
        },
        quantity: Number,
        price: Number,
      },
    ],
  },
  { _id: false }
);

export const ResourceProposalSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    quantity: Number,
    price: Number,
    resource: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
    },
  },
  { _id: false }
);

const Resource =
  mongoose.models?.Resource || mongoose.model("Resource", ResourceSchema);

export default Resource;

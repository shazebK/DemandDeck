import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  service: {
    type: String,
  },
  basePrice: Number,
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
    requests: [
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

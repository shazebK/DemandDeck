import mongoose from "mongoose";

export const ResponseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  response: Boolean,
});

const Response =
  mongoose.models?.Response || mongoose.model("Response", ResponseSchema);

export default Response;

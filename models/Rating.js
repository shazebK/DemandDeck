import mongoose from "mongoose";

export const RatingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  review: [
    {
      title: String,
      score: Number,
    },
  ],
});

const Rating =
  mongoose.models?.Rating || mongoose.model("Rating", RatingSchema);

export default Rating;

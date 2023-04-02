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
  //   contact: {
  //     type: Number,
  //   },
  //   email: {
  //     type: String,
  //   },
  //   location: {
  //     type: String,
  //   },
  //   urls: {
  //     type: [String],
  //   },
});

const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;

import User from "../../../models/User.js";
import connectDB from "../../../utils/db.js";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  if (req.method === "POST") {
    connectDB();
    const { name, password, email, role } = req.body;
    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      password: hashed,
      email,
      role,
    });
    user.resourcesClassified = { available: [], proposed: [], allocated: [] };
    await user.save();
    res.status(201).json(user);
  }
};

export default handler;

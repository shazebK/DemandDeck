import { getServerSession } from "next-auth";
import User from "../../../models/User.js";
import connectDB from "../../../utils/db.js";
import { authOptions } from "./[...nextauth].js";
import Resource from "../../../models/Resources.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "GET") {
      const user = await User.findById(id)
        .select("-password -role")
        .populate({
          path: "resourcesClassified",
          populate: {
            path: "available",
            populate: {
              path: "resource",
              model: Resource,
              select: "title service",
            },
          },
        });
      res.status(200).json(user);
    } else if (req.method == "PUT") {
      await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ msg: "Success" });
    }
  }
};

export default handler;

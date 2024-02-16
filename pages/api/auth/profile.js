import { getServerSession } from "next-auth";
import User from "../../../models/User.js";
import connectDB from "../../../utils/db.js";
import { authOptions } from "./[...nextauth].js";
import Resource from "../../../models/Resource.js";
import Business from "../../../models/Business.js";
import Demand from "../../../models/Demand.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "GET") {
      const user = await User.findById(id)
        .select("-password")
        .populate({
          path: "resourcesClassified",
          populate: [
            {
              path: "available",
              populate: {
                path: "resource",
                model: Resource,
                select: "title service",
              },
            },
            {
              path: "allocated",
              populate: [
                {
                  path: "resource",
                  model: Resource,
                  select: "title service",
                },
                {
                  path: "business",
                  model: Business,
                  select: "title description",
                },
              ],
            },
            {
              path: "requests",
              populate: [
                {
                  path: "resource",
                  model: Resource,
                  select: "title service",
                },
                {
                  path: "business",
                  model: Business,
                  select: "title description",
                },
              ],
            },
          ],
        })
        .populate({
          path: "businesses",
          model: Business,
          populate: {
            path: "onRequest",
            select: "title description",
            model: Demand,
          },
        })
        .populate({
          path: "demandCreated",
          model: Demand,
        });
      res.status(200).json(user);
    } else if (req.method == "PUT") {
      await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json({ msg: "Success" });
    }
  }
};

export default handler;

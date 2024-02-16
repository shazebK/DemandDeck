import { getServerSession } from "next-auth";
import connectDB from "../../../../utils/db.js";
import { authOptions } from "../../auth/[...nextauth].js";
import Demand from "../../../../models/Demand.js";
import User from "../../../../models/User.js";
import Proposal from "../../../../models/Proposal.js";
import Business from "../../../../models/Business.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    const { demandId } = req.query;
    if (req.method == "GET") {
      const demand = await Demand.findById(demandId)
        .populate({
          path: "creator",
          select: "name email _id",
          model: User,
        })
        .populate({
          path: "proposals",
          // select: "name email _id",
          model: Proposal,
          populate: {
            path: "creator",
            select: "name email _id",
            model: User,
          },
        })
        .populate({
          path: "responses",
          populate: {
            path: "user",
            select: "name email _id",
          },
          select: "response",
        })
        .populate({
          path: "active",
          select: "title description _id",
          populate: {
            path: "benefeciaries",
            select: "name email _id",
            model: User,
          },
          model: Business,
        });
      res.status(200).json(demand);
    }
  }
};

export default handler;

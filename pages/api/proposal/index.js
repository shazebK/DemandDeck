import { getServerSession } from "next-auth";
import connectDB from "../../../utils/db.js";
import { authOptions } from "../auth/[...nextauth].js";
import User from "../../../models/User.js";
import Proposal from "../../../models/Proposal.js";

const handler = async (req, res) => {
  connectDB();
  //   const sess = await getServerSession(req, res, authOptions);

  //   if (!sess) {
  //     return res.status(200).json({ msg: "Not Authorized" });
  //   } else {
  const { id, demandId } = req.body;
  const user = await User.findById(id);

  if (req.method == "GET") {
    const proposals = await Proposal.find({ demand: demandId }).populate({
      path: "creator",
      select: "name email _id",
    });

    res.status(200).json(proposals);
  } else if (req.method === "PUT") {
    const { proposalId } = req.body;
    const updated = await Proposal.findByIdAndUpdate(
      proposalId,
      {
        ...req.body,
        _id: proposalId,
      },
      { new: true }
    );
    return res.status(200).json(updated);
  }
  //   }
};

export default handler;

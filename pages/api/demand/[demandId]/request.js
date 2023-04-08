import { getServerSession } from "next-auth";

import Demand from "../../../../models/Demand.js";
import { authOptions } from "../../auth/[...nextauth].js";
import connectDB from "../../../../utils/db.js";
import Proposal from "../../../../models/Proposal.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "POST") {
      const { demandId } = req.query;

      const dem = await Demand.findById(demandId);
      const proposal = await Proposal.create({
        ...req.body,
        status: "req",
        demand: demandId,
        creator: id,
      });

      await proposal.save();
      dem.proposals.push(proposal._id);
      await dem.save();

      res.status(201).json({ msg: "Success" });
    }
  }
};

export default handler;

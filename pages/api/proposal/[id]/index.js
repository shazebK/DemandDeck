import { getServerSession } from "next-auth";
import Proposal from "../../../../models/Proposal.js";
import connectDB from "../../../../utils/db.js";
import { authOptions } from "../../auth/[...nextauth].js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  //   if (!sess) {
  //     return res.status(200).json({ msg: "Not Authorized" });
  //   } else {
  const { id } = req.query;
  const { description, status } = req.body;

  if (req.method === "PUT") {
    const updated = await Proposal.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { new: true }
    );
    return res.status(200).json(updated);
  }
  //   }
};

export default handler;

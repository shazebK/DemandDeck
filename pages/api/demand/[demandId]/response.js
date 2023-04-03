import { getServerSession } from "next-auth";

import Demand from "../../../../models/Demand.js";
import { authOptions } from "../../auth/[...nextauth].js";
import connectDB from "../../../../utils/db.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "GET") {
      const demand = await Demand.find({}).populate({
        path: "creator",
        select: "name email _id",
      });
      res.status(200).json(demand);
    } else if (req.method == "POST") {
      const { response } = req.body;
      const { demandId } = req.query;

      const dem = await Demand.findById(demandId);
      dem.responses.push({
        user: id,
        response,
      });
      await dem.save();

      res.status(201).json({ msg: "Success" });
    }
  }
};

export default handler;

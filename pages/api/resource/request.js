import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import connectDB from "../../../utils/db";
import Resource from "../../../models/Resources";
import User from "../../../models/User";
import Business from "../../../models/Business";

const handler = async (req, res) => {
  connectDB();

  if (req.method == "POST") {
    const { id, allId, itemId, quantity } = req.body;

    const allocator = await User.findById(allId);
    const business = await Business.findById(id);

    allocator.resourcesClassified.requests.push({
      resource: itemId,
      business: id,
      quantity,
    });

    business.resourcesRequested.push({
      resource: itemId,
      from: allId,
      quantity,
    });

    await allocator.save();
    await business.save();

    res.status(201).json({ msg: "Success" });
  }
};

export default handler;

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import connectDB from "../../../utils/db";
import User from "../../../models/User";
import Business from "../../../models/Business";

const handler = async (req, res) => {
  connectDB();

  if (req.method == "POST") {
    const { id, allId, itemId, quantity } = req.body;

    const allocator = await User.findById(allId);
    const business = await Business.findById(id);

    allocator.resourcesClassified.allocated.push({
      resource: itemId,
      business: id,
      quantity,
    });

    const newRequests = allocator.resourcesClassified.requests.filter((el) => {
      return (
        JSON.parse(JSON.stringify(el.resource)) !== itemId ||
        JSON.parse(JSON.stringify(el.business)) !== id
      );
    });

    console.log(newRequests);
    allocator.resourcesClassified.requests = newRequests;

    business.resources.push({
      resource: itemId,
      quantity,
    });

    const temp = business.resourcesRequested.filter(
      (el) => JSON.parse(JSON.stringify(el.resource)) !== itemId
    );
    business.resourcesRequested = temp;

    await allocator.save();
    await business.save();

    console.log(allocator);

    res.status(201).json({ msg: "Success" });
  }
};

export default handler;

import Business from "../../../../models/Business";
import Demand from "../../../../models/Demand";
import Proposal from "../../../../models/Proposal";
import User from "../../../../models/User";
import connectDB from "../../../../utils/db";

const handler = async (req, res) => {
  connectDB();
  const { id } = req.query;

  if (req.method === "GET") {
    const business = await Business.findById(id)
      .populate({
        path: "owner",
        select: "email name _id",
      })
      .populate({
        path: "benefeciaries",
        select: "name email _id",
      })
      .populate({
        path: "reviews",
        populate: {
          path: "user",
          select: "name email _id",
        },
      });
    res.status(200).json(business);
  } else if (req.method === "PUT") {
    const upd = await Business.findOneAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.status(200).json(upd);
  } else if (req.method === "DELETE") {
    const buss = await Business.findById(id);
    const ownerId = buss.owner;
    const demandId = buss.onRequest;
    const owner = await User.findById(ownerId);

    const bussinessesUp = owner.businesses.filter(
      (el) => JSON.parse(JSON.stringify(el)) !== id
    );

    owner.businesses = bussinessesUp;

    const proposals = await Proposal.find({
      demand: demandId,
    });

    const proposed = await Proposal.findOne({
      demand: demandId,
      creator: owner,
    });

    proposed.status = "rej";

    for (let prop of proposals) {
      if (
        JSON.parse(JSON.stringify(prop._id)) !==
        JSON.parse(JSON.stringify(proposed._id))
      ) {
        await Proposal.findByIdAndUpdate(prop._id, {
          status: "reconsiderations",
        });
      }
    }

    const demand = await Demand.findById(demandId);
    demand.active = null;
    await demand.save();
    await owner.save();
    await proposed.save();
    await Business.findByIdAndDelete(id);
    res.status(200).json({ msg: "success" });
  }
};

export default handler;

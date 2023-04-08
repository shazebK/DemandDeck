import Business from "../../../../models/Business";

const handler = async (req, res) => {
  const { id } = req.query;

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
};

export default handler;

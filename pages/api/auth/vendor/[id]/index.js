import Business from "../../../../../models/Business";
import Resource from "../../../../../models/Resource";
import User from "../../../../../models/User";
import connectDB from "../../../../../utils/db";

const handler = async (req, res) => {
  connectDB();
  //   const sess = await getServerSession(req, res, authOptions);

  //   if (!sess) {
  //     return res.status(200).json({ msg: "Not Authorized" });
  //   } else {
  const { id } = req.query;
  if (req.method == "GET") {
    const user = await User.findById(id)
      .select("-password -role")
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
      .populate([
        {
          path: "businesses",
          model: Business,
        },
      ]);
    res.status(200).json(user);
  } else if (req.method == "PUT") {
    await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ msg: "Success" });
  }
  //   }
};

export default handler;

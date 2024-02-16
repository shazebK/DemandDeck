import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import connectDB from "../../../utils/db";
import Resource from "../../../models/Resource";
import User from "../../../models/User";

const handler = async (req, res) => {
  connectDB();
  //   const sess = await getServerSession(req, res, authOptions);
  //   if (!sess) {
  //     return res.status(200).json({ msg: "Not Authorized" });
  //   } else {
  // const { id } = sess.user;
  // const { id } = req.body;
  if (req.method == "POST") {
    const { title, service, quantity, id } = req.body;
    console.log(req.body);
    const resource = new Resource({ title, service });

    const user = await User.findById(id);

    user.resourcesClassified.available.push({
      resource: resource._id,
      quantity,
    });
    await user.save();
    await resource.save();
    res.status(201).json(resource);
  }
  //   }
};

export default handler;

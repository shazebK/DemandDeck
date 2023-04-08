import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import Business from "../../../models/Business";
import User from "../../../models/User";
import connectDB from "../../../utils/db";

const handler = async (req, res) => {
  connectDB();
  //   const sess = await getServerSession(req, res, authOptions);
  //   if (!sess) {
  //     return res.status(200).json({ msg: "Not Authorized" });
  //   } else {
  // const { id } = sess.user;
  const { id } = req.body;
  if (req.method == "GET") {
    const businesses = await Business.find({});
    res.status(200).json(businesses);
  } else if (req.method == "POST") {
    const business = new Business(req.body);
    console.log(business);
    await business.save();
    res.status(201).json(business);
  }
  //   }
};

export default handler;

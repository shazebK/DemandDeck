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
  const { id, locations } = req.body;
  if (req.method == "GET") {
    console.log(req.body);
    const user = await User.findById(id);
    const cityServiceMap = new Map();
    const services = user.services;
    console.log(locations);
    for (let location of locations) {
      let cityTags = [];

      const cityServices = new Set();
      const businesses = await Business.find({ location });
      for (let business of businesses) {
        for (let tag of business.tags) {
          cityServices.add(tag);
        }
      }

      for (let userService of services) {
        if (!cityServices.has(userService)) cityTags.push(userService);
      }

      cityServiceMap.set(location, cityTags);
    }

    let ans = [];

    for (let cityS of cityServiceMap) {
      ans.push(cityS, cityServiceMap[cityS]);
    }

    const resl = ans.filter((el) => el);

    res.status(200).json(resl);
  } else if (req.method == "POST") {
    const business = new Business(req.body);
    console.log(business);
    await business.save();
    res.status(201).json(business);
  }
  //   }
};

export default handler;

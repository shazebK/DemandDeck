import connectDB from "../../../../utils/db";
import User from "../../../../models/User";
import Resource from "../../../../models/Resources";

const handler = async (req, res) => {
  connectDB();
  //   const sess = await getServerSession(req, res, authOptions);
  //   if (!sess) {
  //     return res.status(200).json({ msg: "Not Authorized" });
  //   } else {
  // const { id } = sess.user;

  if (req.method == "GET") {
    const { location, services, id, demandId } = req.body;
    const providers = await User.find({ location /* role: "allocator"  */ })
      .populate({
        path: "resourcesClassified",
        populate: {
          path: "available",
          populate: {
            path: "resource",
            model: Resource,
            select: "title service",
          },
        },
      })
      .select("name email");

    const serviceMap = new Map();

    for (let service of services) {
      const providerSet = new Set();

      for (let provider of providers) {
        for (let avService of provider.resourcesClassified.available) {
          if (avService.resource.service === service) {
            providerSet.add({
              name: provider.name,
              email: provider.email,
              serviceName: avService.resource.title,
              serviceQuantity: avService.quantity,
            });
          }
        }
      }

      let temp = [];
      for (let t of providerSet) temp.push(t);

      serviceMap.set(service, temp);
    }

    let ans = [];

    for (let t of serviceMap) {
      ans.push(t, serviceMap[t]);
    }

    const resl = ans.filter((el) => el);
    res.status(200).json(resl);
  } else if (req.method == "POST") {
    const { title, service, quantity } = req.body;
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

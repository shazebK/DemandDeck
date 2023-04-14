import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import connectDB from "../../../utils/db";
import Resource from "../../../models/Resources";
import User from "../../../models/User";

const handler = async (req, res) => {
  connectDB();
  //   const sess = await getServerSession(req, res, authOptions);
  //   if (!sess) {
  //     return res.status(200).json({ msg: "Not Authorized" });
  //   } else {
  // const { id } = sess.user;
  const { id } = req.body;
  if (req.method == "GET") {
    const { location } = req.body;
    if (!req.body.filters) {
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

      const products = [];

      for (let prov of providers) {
        for (let prod of prov.resourcesClassified.available) {
          products.push({
            seller: prov.name,
            sellerMail: prov.email,
            product: prod.resource.title,
            service: prod.resource.service,
            amt: prod.quantity,
            productId: prod.resource._id,
            sellerId: prov._id,
          });
        }
      }

      res.status(200).json(products);
    } else {
      const { filters } = req.body;
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

      const products = [];

      for (let prov of providers) {
        for (let prod of prov.resourcesClassified.available) {
          let isFiltered = false;

          for (let filter of filters) {
            if (prod.resource.service === filter) isFiltered = true;
          }

          if (isFiltered)
            products.push({
              seller: prov.name,
              sellerMail: prov.email,
              product: prod.resource.title,
              service: prod.resource.service,
              amt: prod.quantity,
              productId: prod.resource._id,
              sellerId: prov._id,
            });
        }
      }

      res.status(200).json(products);
    }
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

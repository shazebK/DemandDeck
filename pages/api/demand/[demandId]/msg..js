import { pusher } from "../../../../utils/pusher";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { id } = req.query;

    pusher.trigger(id, "msg", { msg: req.body.msg, id: req.body.id });
    res.status(200).json({ msg: "hello" });
  }
}

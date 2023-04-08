import Business from "../../../../models/Business";
import connectDB from "../../../../utils/db";

const handler = async (req, res) => {
  connectDB();
  const { id } = req.query;
  const { user, title, score } = req.body;
  const business = await Business.findById(id);
  console.log(business);
  const userReview = business.reviews.find((el) => {
    return JSON.parse(JSON.stringify(el.user)) === user;
  });

  console.log(userReview);

  if (userReview) {
    userReview.review.push({ title, score });
  } else {
    business.reviews.push({
      user,
      review: [{ title, score }],
    });
  }

  await business.save();

  res.status(200).json(business);
};

export default handler;

import Business from "../../../../models/Business";

const handler = async (req, res) => {
  const { id } = req.query;
  const { user, title, score } = req.body;
  const business = await Business.findById(id);
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

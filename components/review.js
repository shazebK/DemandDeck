import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Review() {
  const [rating,setRating] = useState(5);
  const [review,setReview] = useState("");

  function ratingHandler(event){
    setRating(event.target.value)
  }

  function reviewHandler(event){
    setReview(event.target.name.lastChar());
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(rating,review);
  }

  return (
    <div className="w-full pt-12">
      <div className="w-4/5 pt-8 shadow-xl border-2 flex flex-col items-center mx-auto">
        <h1 className="text-[32px] font-bold">
          Review your Experience with BusinessName
        </h1>
        <form className="w-full flex flex-col items-center px-8" onSubmit={submitHandler}>
          <div className="rating rating-lg mx-auto my-8">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              value = {1}
              onChange={ratingHandler}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value = {2}
              onChange={ratingHandler}
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-star-2 bg-orange-400"
              value = {3}
              onChange={ratingHandler}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-orange-400"
              value = {4}
              onChange={ratingHandler}
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              value = {5}
              onChange={ratingHandler}
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full h-40 resize-none"
            placeholder="Write your review"
            value = {review}
            onChange = {reviewHandler}
          ></textarea>

          <button type = "submit" className="btn w-40 rounded-full border-none bg-sec hover:bg-sec-dark mx-auto my-8">Post</button>
        </form>
      </div>
    </div>
  );
}

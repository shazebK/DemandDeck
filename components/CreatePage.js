import React from "react";
import DropDownCard from "./Forms/vendor_signup_components/DropDownCard";
import { usePollMutations } from "../hooks/mutations";

export default function CreatePage() {
  const { createDemand } = usePollMutations();

  const createDemandHandler = (body) => {
    createDemand.mutate({ title: "D4" });
  };

  return (
    <div className="w-full my-8 px-4">
      <h1 className="md:text-[48px] text-center font-bold">
        Create Your Demand
      </h1>

      <div className="w-full md:w-1/2 mx-auto my-8">
        <div className="my-4">
          <h3 className="text-xl font-semibold my-4">Category</h3>
          <select className="select select-bordered w-full focus:outline-none">
            <option>Laundary</option>
            <option>Milk</option>
            <option>Newspaper</option>
          </select>
        </div>

        <div className="my-8">
          <h3 className="text-xl font-semibold my-4">Demand Title</h3>
          <input
            type="text"
            placeholder="Keep title precise and small"
            className="input input-bordered w-full focus:outline-none"
          />
        </div>

        <div className="my-8">
          <h3 className="text-xl font-semibold my-4">Description</h3>
          <textarea
            className="textarea textarea-bordered w-full h-60 resize-none focus:outline-none"
            placeholder="Mention details and resources required for the demand"
          ></textarea>
        </div>

        <div className="my-8 flex flex-col">
          <h3 className="text-xl font-semibold my-4">Location</h3>
          <select className="select select-bordered w-full my-4 focus:outline-none"></select>
          <select className="select select-bordered w-full my-4 focus:outline-none"></select>
          <select className="select select-bordered w-full my-4 focus:outline-none"></select>
        </div>

        <div className="my-8">
          <h3 className="text-xl font-semibold my-4">Related Tags</h3>
          <input
            type="text"
            placeholder="Tagname"
            className="input input-bordered w-full focus:outline-none"
          />
          <div className="my-4 w-full flex flex-wrap">
            <DropDownCard text="Milk" />
            <DropDownCard text="Eggs" />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <button
            className="btn w-40 rounded-full border-none bg-sec hover:bg-sec-dark mx-auto"
            onClick={createDemandHandler}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

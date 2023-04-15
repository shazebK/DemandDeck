import { Email } from "@mui/icons-material";
import React, { useState } from "react";
import { usePollMutations } from "../hooks/mutations";
import { useRouter } from "next/router";

export default function ProposalPage({ id }) {
  const { makeProposal } = usePollMutations(id);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const router = useRouter();

  console.log(id);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc);
    makeProposal.mutate({ title, description: desc, id });
    router.push(`/demands/${id}`);
  };

  return (
    <>
      <div class="container px-4 sm:px-8 mx-auto max-w-lg">
        <div class="wrapper bg-white rounded-sm shadow-lg">
          <div class="card px-8 py-4">
            <div class="card-text">
              <h1 class="text-xl md:text-2xl font-bold leading-tight text-gray-900">
                Enter the details of your Proposal
              </h1>
            </div>

            <form
              class="card-mail flex flex-col items-center my-10"
              onSubmit={submitHandler}
            >
              <input
                type="text"
                class="border border-gray-200 rounded-l-md w-full text-base md:text-lg px-3 py-2  my-4"
                placeholder="Enter name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                class="border border-gray-200 rounded-l-md w-full text-base md:text-lg px-3 py-2 my-4"
                placeholder="Enter proposal description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              {/* <textarea
                class="border border-gray-200 rounded-l-md w-full text-base md:text-lg px-3 py-2 my-4"
                placeholder="Enter the resources you are offering"
              /> */}
              <button class="bg-orange-500 hover:bg-orange-600 hover:border-orange-600 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

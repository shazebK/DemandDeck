import axios from "axios";
import React, { useEffect, useState } from "react";

const PollsPage = () => {
  const [demands, setDemands] = useState([]);
  useEffect(() => {
    const helper = async () => {
      const { data } = await axios.get("/api/demand");
      setDemands(data);
    };

    helper();
  }, []);

  const voteHandler = async (id) => {
    await axios.post(`/api/demand/${id}/response`);
  };

  return (
    <div>
      {demands?.map((el) => (
        <div key={el._id} className="my-4">
          <div>{el.title}</div>
          <div>{el.description}</div>
          <div>{el.location}</div>
          <div>{JSON.stringify(el.creator)}</div>
          <div>{JSON.stringify(el.proposals)}</div>
          <div className="my-6 bg-blue-700 text-white">
            {JSON.stringify(el.active)}
          </div>
          <div
            className="m2-6 bg-blue-700 text-white"
            onClick={() => voteHandler(el._id)}
          >
            votes: {JSON.stringify(el.responses)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PollsPage;

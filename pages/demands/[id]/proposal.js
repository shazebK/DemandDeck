import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { usePollMutations } from "../../../hooks/mutations";
import axios from "axios";
import ProposalPage from "../../../components/ProposalPage";

const ProposalCreate = () => {
  const router = useRouter();
  const { id } = router.query;
  const { makeProposal } = usePollMutations(id);
  const [resouces, setResources] = useState([]);

  useEffect(() => {
    const helper = async () => {
      const { data } = await axios.post(`/api/demand/${id}/resource`, {
        location: "",
        services: [],
      });
      setResources(data);
    };

    helper();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mt-12">
      {/* {JSON.stringify(resouces)} */}
      <ProposalPage id={id} />
      <button
        className="btn btn-primary my-4"
        onClick={() => router.push(`/demands/${id}`)}
      >
        Go back
      </button>
    </div>
  );
};

export default ProposalCreate;

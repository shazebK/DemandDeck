import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { usePollMutations } from "../../../hooks/mutations";

const ProposalCreate = () => {
  const router = useRouter();
  const { id } = router.query;

  const { makeProposal } = usePollMutations(id);

  return (
    <div>
      <Formik
        initialValues={{
          description: "",
        }}
        onSubmit={(values) => {
          makeProposal.mutate({ ...values, id });
          router.push(`/demands/${id}`);
        }}
      >
        <Form className="flex flex-col items-start">
          <label htmlFor="">description</label>
          <Field type="text" name="description" />
          <ErrorMessage name="description" component="div" />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
      <button
        className="btn btn-primary"
        onClick={() => router.push(`/demands/${id}`)}
      >
        Go back
      </button>
    </div>
  );
};

export default ProposalCreate;

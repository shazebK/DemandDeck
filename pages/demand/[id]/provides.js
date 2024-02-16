import React, { useEffect, useState } from "react";
import { useBusiness } from "../../../hooks/queries";
import { useRouter } from "next/router";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ResourcePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [resouces, setResources] = useState([]);

  const { business, isError, isLoading, error } = useBusiness(id);

  useEffect(() => {
    const helper = async () => {
      const { data } = await axios.get("/api/resource");
      setResources(data);
    };

    helper();
  }, []);

  return (
    <div>
      {JSON.stringify(business)}

      <Formik
        initialValues={{
          description: "",
          service: "",
          basePrice: 0,
        }}
        onSubmit={async (values) => {
          await axios.post("/api/resource", values);
          router.push(`/demands/${id}`);
        }}
      >
        <Form className="flex flex-col items-start">
          <label htmlFor="">title</label>
          <Field type="text" name="title" />
          <ErrorMessage name="title" component="div" />
          <label htmlFor="">service</label>
          <Field type="text" name="service" />
          <ErrorMessage name="service" component="div" />
          <label htmlFor="">basePrice</label>
          <Field type="number" name="basePrice" />
          <ErrorMessage name="basePrice" component="div" />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ResourcePage;

import React from "react";
import { useUserMutations } from "../../hooks/mutations";
import { useUser } from "../../hooks/queries";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ProfilePage = () => {
  const { editProfileMutation } = useUserMutations();
  const { user, isLoading } = useUser();

  return (
    <div>
      {isLoading ? "Loading" : user?.name}
      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {
          editProfileMutation.mutate({ ...values });
        }}
      >
        <Form className="flex flex-col items-start">
          <label htmlFor="">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />

          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfilePage;

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const AuthPage = () => {
  const { data: session } = useSession();
  const [signup, setSignup] = useState(true);
  console.log(session);

  if (!session) {
    if (signup) {
      return (
        <div className="text-black">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              await axios.post("/api/auth/signup", { ...values });
              await signIn("credentials", {
                email: values.email,
                password: values.password,
              });
            }}
          >
            <Form className="flex flex-col items-start">
              <label htmlFor="">Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />

              <label htmlFor="">Email</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />

              <button type="submit" className="btn">
                Submit
              </button>
              <button className="btn" onClick={() => setSignup(false)}>
                Login
              </button>
            </Form>
          </Formik>
        </div>
      );
    } else {
      return (
        <div className="text-black">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              await signIn("credentials", {
                email: values.email,
                password: values.password,
              });
            }}
          >
            <Form className="flex flex-col items-start">
              <label htmlFor="">Email</label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />

              <button type="submit" className="btn">
                Submit
              </button>
              <button className="btn" onClick={() => setSignup(true)}>
                SignUp
              </button>
            </Form>
          </Formik>
        </div>
      );
    }
  } else {
    return (
      <>
        <h1>Welcome</h1>;
      </>
    );
  }
};

export default AuthPage;

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Auth from "../../components/Forms/Auth";
import { useRouter } from "next/router";

const AuthPage = () => {
  const { data: session } = useSession();
  const [signup, setSignup] = useState(true);
  console.log(session);

  const router = useRouter();

  const toggleHandler = () => {
    setSignup((prev) => !prev);
  };

  if (!session) {
    return <Auth signup={signup} setSignup={toggleHandler} />;
  } else {
    router.push("/");
  }
};

export default AuthPage;

import React, { useState } from "react";
import Auth from "../../components/Forms/Auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { setCookie } from "cookies-next";

const AuthPage = ({ session }) => {
  const [signup, setSignup] = useState(true);

  const toggleHandler = () => {
    setSignup((prev) => !prev);
  };

  return <Auth signup={signup} setSignup={toggleHandler} />;
};

export default AuthPage;

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    setCookie("err", "Already signed in", {
      req: context.req,
      res: context.res,
    });

    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};

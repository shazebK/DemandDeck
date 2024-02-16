import React from "react";
import CreatePage from "../../components/Demand/CreatePage";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { setCookie } from "cookies-next";

const CreateDemand = () => {
  return (
    <div>
      <CreatePage />
    </div>
  );
};

export default CreateDemand;

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  setCookie("err", "Not a consumer", {
    req: context.req,
    res: context.res,
  });

  if (session && session?.user?.role !== "basic") {
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
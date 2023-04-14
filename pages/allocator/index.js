import React from "react";
import { useUser } from "../../hooks/queries";

const AllocatorPage = () => {
  const { user } = useUser();

  return <div>{JSON.stringify(user)}</div>;
};

export default AllocatorPage;

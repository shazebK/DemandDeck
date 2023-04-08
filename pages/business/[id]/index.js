import React from "react";
import { useBusiness } from "../../../hooks/queries";
import { useRouter } from "next/router";

const BusinessPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { business, error, isError, isLoading } = useBusiness(id);

  return <div>{JSON.stringify(business)}</div>;
};

export default BusinessPage;

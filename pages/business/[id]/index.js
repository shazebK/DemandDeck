import React from "react";
import { useBusiness } from "../../../hooks/queries";
import { useRouter } from "next/router";
import Business from "../../../components/Business/Business";

const BusinessPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { business, error, isError, isLoading } = useBusiness(id);

  if (isLoading) return <p>Loading</p>;

  return (
    <div>
      <Business business={business} />
      <div className="mt-12">{JSON.stringify(business)}</div>
    </div>
  );
};

export default BusinessPage;

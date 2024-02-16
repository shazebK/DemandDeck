import React from "react";
import { usePolls } from "../../hooks/queries";
import DemandsPageComponent from "../../components/DemandsPage"

const DemandsPage = () => {
  const { demands, isError, isLoading, error } = usePolls();

    return (
      <div>
        <DemandsPageComponent demands={demands} />
      </div>
    );
};

export default DemandsPage;

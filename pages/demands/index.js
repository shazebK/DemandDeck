import { usePolls } from "../../hooks/queries";
import { usePollMutations } from "../../hooks/mutations";
import Link from "next/link";
import DemandsPage from "../../components/DemandsPage";

const PollsPage = () => {
  const { demands, isError, error, isLoading } = usePolls();
  console.log(demands);

  return (
    <div>
      <DemandsPage demands={demands} />
    </div>
  );
};

export default PollsPage;

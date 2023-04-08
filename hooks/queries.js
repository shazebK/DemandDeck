import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../utils/api";

export const useUser = () => {
  const {
    isLoading,
    error,
    isError,
    data: user,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUserData,
  });

  return { isLoading, isError, error, user };
};

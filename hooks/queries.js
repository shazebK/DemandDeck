import { useQuery } from "@tanstack/react-query";
import { getPollsData, getUserData } from "../utils/api";

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

export const usePolls = () => {
  const {
    isLoading,
    error,
    isError,
    data: demands,
  } = useQuery({
    queryKey: ["demands"],
    queryFn: getPollsData,
  });

  return { isLoading, isError, error, demands };
};

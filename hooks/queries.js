import { useQuery } from "@tanstack/react-query";
import {
  getBusiness,
  getPollData,
  getPollsData,
  getUserData,
} from "../utils/api";

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

export const usePoll = (id) => {
  const {
    isLoading,
    error,
    isError,
    data: demand,
  } = useQuery({
    queryKey: ["demands", id],
    queryFn: () => getPollData(id),
  });

  return { isLoading, isError, error, demand };
};

export const useBusiness = (id) => {
  const {
    isLoading,
    error,
    isError,
    data: business,
  } = useQuery({
    queryKey: ["business", id],
    queryFn: () => getBusiness(id),
  });

  return { isLoading, isError, error, business };
};

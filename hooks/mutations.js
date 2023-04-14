import { useQueryClient, useMutation } from "@tanstack/react-query";
import {
  demandCreator,
  editUserData,
  proposalacceptor,
  proposalmaker,
  voteHandler,
} from "../utils/api";

export const useUserMutations = () => {
  const queryClient = useQueryClient();

  const editProfileMutation = useMutation({
    mutationFn: editUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { editProfileMutation };
};

export const usePollMutations = (id) => {
  const queryClient = useQueryClient();

  const castVoteMutation = useMutation({
    mutationFn: voteHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["demands"] });
    },
  });

  const makeProposal = useMutation({
    mutationFn: proposalmaker,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["demands"],
        queryKey: ["demands", id],
      });
    },
  });

  const acceptProposal = useMutation({
    mutationFn: proposalacceptor,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["demands"],
        queryKey: ["demands", id],
      });
    },
  });

  const createDemand = useMutation({
    mutationFn: demandCreator,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["demands"],
      });
    },
  });

  return { castVoteMutation, makeProposal, acceptProposal, createDemand };
};

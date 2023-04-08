import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editUserData, voteHandler } from "../utils/api";

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

export const usePollMutations = () => {
  const queryClient = useQueryClient();

  const castVoteMutation = useMutation({
    mutationFn: voteHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["demands"] });
    },
  });

  return { castVoteMutation };
};

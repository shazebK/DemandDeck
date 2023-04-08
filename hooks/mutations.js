import { useQueryClient, useMutation } from "@tanstack/react-query";
import { editUserData } from "../utils/api";

export const useUserMutations = () => {
  const queryClient = useQueryClient();

  const editProfileMutation = useMutation({
    mutationFn: editUserData,
    onSuccess: () => {
      console.log("sfkmfk");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  return { editProfileMutation };
};

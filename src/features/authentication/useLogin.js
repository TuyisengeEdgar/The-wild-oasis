import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/dashboard");
      console.log(user);
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}

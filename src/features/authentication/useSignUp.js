import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

export function useSignUp() {
  const { mutate: signup, isLoadind } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Acount created successfully please verify the e-mail of the acount"
      );
    },
    onError: (err) => toast.error("Err", err),
  });
  return { isLoadind, signup };
}

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback } from "react";

type RequestType = any;
type ResponseType = any;

type Options = {
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
};

export const useCreateWorkspace = () => {
  const mutation = useMutation(api.workspaces.create);

  const mutate = useCallback(
    async (values: RequestType, options?: Options) => {
      try {
        const response = await mutation(values);
        options?.onSuccess?.();
      } catch (error) {
        options?.onError?.();
      } finally {
        options?.onSettled?.();
      }
    },
    [mutation]
  );

  return {
    mutate,
  };
};

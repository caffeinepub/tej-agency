import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      phone,
      agencyName,
      message,
    }: {
      name: string;
      email: string;
      phone: string;
      agencyName: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not ready");
      const result = await actor.submitContactForm(
        name,
        email,
        phone,
        agencyName,
        message,
      );
      return result;
    },
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isCallerAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllSubmissions() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["allSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

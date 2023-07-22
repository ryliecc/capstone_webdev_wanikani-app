import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function useStartAssignment(id) {
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  const endpointPath = id + "/start";

  const fetchAssignment = async () => {
    const requestHeaders = new Headers({
      "Wanikani-Revision": "20170710",
      Authorization: "Bearer " + apiToken,
    });
    const apiEndpoint = new Request(
      "https://api.wanikani.com/v2/assignments/" + endpointPath,
      {
        method: "PUT",
        headers: requestHeaders,
      }
    );

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { error } = await fetcher(apiEndpoint);
    return { isError: error };
  };

  const { error, isLoading } = useSWR(
    apiToken ? ["assignments", endpointPath] : null,
    fetchAssignment
  );

  return {
    isLoading,
    isError: error,
  };
}

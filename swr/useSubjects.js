import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function useSubjects(endpointPath) {
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  const fetchSubjects = async () => {
    const requestHeaders = new Headers({
      "Wanikani-Revision": "20170710",
      Authorization: "Bearer " + apiToken,
    });
    const apiEndpoint = new Request(
      "https://api.wanikani.com/v2/subjects/" + endpointPath,
      {
        method: "GET",
        headers: requestHeaders,
      }
    );

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = await fetcher(apiEndpoint);
    return { subjects: data, isError: error };
  };

  const { data, error, isLoading } = useSWR(
    apiToken ? ["subjects", endpointPath] : null,
    fetchSubjects
  );

  return {
    subjects: data?.subjects,
    isLoading,
    isError: error,
  };
}

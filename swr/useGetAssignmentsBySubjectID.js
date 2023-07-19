import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function useStartAssignment(subjectIds) {
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  const fetchAssignments = async () => {
    const requestHeaders = new Headers({
      "Wanikani-Revision": "20170710",
      Authorization: "Bearer " + apiToken,
    });
    const apiEndpoint = new Request(
      "https://api.wanikani.com/v2/assignments/?subject_ids=" + subjectIds,
      {
        method: "GET",
        headers: requestHeaders,
      }
    );

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = await fetcher(subjectIds);
    return { assignments: data, isError: error };
  };

  const { data, error, isLoading } = useSWR(
    apiToken ? ["assignments", subjectIds] : null,
    fetchAssignments
  );

  return {
    assignments: data?.assignments,
    isLoading,
    isError: error,
  };
}

import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function useGetAssignmentsBySubjectID(subjectIds) {
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  const fetchAssignments = async () => {
    const requestHeaders = new Headers({
      "Wanikani-Revision": "20170710",
      Authorization: "Bearer " + apiToken,
    });
    const apiEndpoint = new Request(
      "https://api.wanikani.com/v2/assignments/?subject_ids=" +
        subjectIds.join(","),
      {
        method: "GET",
        headers: requestHeaders,
      }
    );

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = await fetcher(apiEndpoint);
    return { assignments: data, isError: error };
  };

  const { data, error, isLoading } = useSWR(
    apiToken && subjectIds ? ["assignments", subjectIds] : null,
    fetchAssignments
  );

  return {
    assignments: data?.assignments,
    isLoading,
    isError: error,
  };
}

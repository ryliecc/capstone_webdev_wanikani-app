import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function useSummary() {
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  const fetchSummary = async () => {
    const requestHeaders = new Headers({
      "Wanikani-Revision": "20170710",
      Authorization: "Bearer " + apiToken,
    });
    const apiEndpoint = new Request("https://api.wanikani.com/v2/summary", {
      method: "GET",
      headers: requestHeaders,
    });

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, error } = await fetcher(apiEndpoint);
    return { summary: data, isError: error };
  };

  const { data, error, isLoading } = useSWR(
    apiToken ? "summary" : null,
    fetchSummary
  );

  console.log(data);
  return {
    summary: data?.summary,
    isLoading,
    isError: error,
  };
}

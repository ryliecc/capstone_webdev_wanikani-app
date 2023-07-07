import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function useUser() {
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  const requestHeaders = new Headers({
    "Wanikani-Revision": "20170710",
    Authorization: "Bearer " + apiToken,
  });
  let apiEndpoint = new Request("https://api.wanikani.com/v2/user", {
    method: "GET",
    headers: requestHeaders,
  });
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(apiEndpoint, fetcher);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}

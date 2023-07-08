import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

export default function useUser() {
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  const fetchUser = async () => {
    const requestHeaders = new Headers({
      "Wanikani-Revision": "20170710",
      Authorization: "Bearer " + apiToken,
    });
    const apiEndpoint = new Request("https://api.wanikani.com/v2/user", {
      method: "GET",
      headers: requestHeaders,
    });
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error } = await fetcher(apiEndpoint);
    return { user: data, isError: error };
  };

  const { data, error, isLoading } = useSWR(
    apiToken ? "user" : null,
    fetchUser
  );
  return {
    user: data?.user,
    isLoading,
    isError: error,
  };
}

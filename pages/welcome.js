import styled from "styled-components";
import AppHeader from "../components/AppHeader.js";
import APITokenInputField from "../components/APITokenInputField.js";
import useLocalStorageState from "use-local-storage-state";
import LoadingComponent from "../components/Loading.js";
import { useState, useEffect } from "react";

const WelcomeMessage = styled.h2`
  text-align: center;
  font-size: 3.6em;
  margin: 0.6em;
  margin-top: 0.2em;
`;

export default function WelcomePage() {
  const [loadingIsVisible, setLoadingIsVisible] = useState(true);
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });
  const [subjects, setSubjects] = useLocalStorageState("subjects", {
    defaultValue: [],
  });
  const requestHeaders = new Headers({
    "Wanikani-Revision": "20170710",
    Authorization: "Bearer " + apiToken,
  });
  var apiEndpoint = new Request("https://api.wanikani.com/v2/subjects", {
    method: "GET",
    headers: requestHeaders,
  });

  useEffect(() => {
    if (apiToken === "") {
      setLoadingIsVisible(false);
    }
  }, [apiToken]);

  useEffect(() => {
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((responseBody) => setSubjects(responseBody));
  }, []);

  return (
    <>
      <AppHeader />
      <WelcomeMessage>いらっしゃいませ !</WelcomeMessage>
      <LoadingComponent loadingIsVisible={loadingIsVisible} />
      <APITokenInputField />
    </>
  );
}

import styled from "styled-components";
import AppHeader from "../components/AppHeader.js";
import APITokenInputField from "../components/APITokenInputField.js";
import useLocalStorageState from "use-local-storage-state";
import LoadingComponent from "../components/Loading.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/router.js";

const WelcomeMessage = styled.h2`
  text-align: center;
  font-size: 3.6em;
  margin: 0.6em;
  margin-top: 0.2em;
`;

export default function HomePage() {
  const [loadingIsVisible, setLoadingIsVisible] = useState(true);
  const [inputFieldIsVisible, setInputFieldIsVisible] = useState(false);
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });
  const [userObject, setUserObject] = useLocalStorageState("userObject", {
    defaultValue: [],
  });
  const requestHeaders = new Headers({
    "Wanikani-Revision": "20170710",
    Authorization: "Bearer " + apiToken,
  });
  var apiEndpoint = new Request("https://api.wanikani.com/v2/user", {
    method: "GET",
    headers: requestHeaders,
  });
  const router = useRouter();

  useEffect(() => {
    if (apiToken === "") {
      setLoadingIsVisible(false);
      setInputFieldIsVisible(true);
    } else {
      setLoadingIsVisible(true);
      setInputFieldIsVisible(false);
      fetch(apiEndpoint)
        .then((response) => response.json())
        .then((responseBody) => setUserObject(responseBody))
        .then(
          setTimeout(() => {
            router.push("/dashboard");
          }, 2000)
        )
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [apiToken]);

  function handleSubmitAPITokenInput(event) {
    event.preventDefault();
    const tokenInput = event.target.elements.tokenInput.value;
    setApiToken(tokenInput);
  }

  useEffect(() => {
    if (apiToken !== "") {
      fetch(apiEndpoint)
        .then((response) => response.json())
        .then((responseBody) => setUserObject(responseBody))
        .then(
          setTimeout(() => {
            router.push("/dashboard");
          }, 2000)
        )
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  return (
    <>
      <AppHeader />
      <WelcomeMessage>いらっしゃいませ !</WelcomeMessage>
      <LoadingComponent loadingIsVisible={loadingIsVisible} />
      <APITokenInputField
        onSubmitAPITokenInput={handleSubmitAPITokenInput}
        inputFieldIsVisible={inputFieldIsVisible}
      />
    </>
  );
}

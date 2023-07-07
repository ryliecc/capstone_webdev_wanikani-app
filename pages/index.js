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
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (apiToken === "") {
      setLoadingIsVisible(false);
    } else {
      setLoadingIsVisible(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
  }, [apiToken, router]);

  function handleSubmitAPITokenInput(event) {
    event.preventDefault();
    const tokenInput = event.target.elements.tokenInput.value;
    setApiToken(tokenInput);
  }

  return (
    <>
      <AppHeader />
      <WelcomeMessage>いらっしゃいませ !</WelcomeMessage>
      <LoadingComponent loadingIsVisible={loadingIsVisible} />
      <APITokenInputField
        onSubmitAPITokenInput={handleSubmitAPITokenInput}
        inputFieldIsVisible={!loadingIsVisible}
      />
    </>
  );
}

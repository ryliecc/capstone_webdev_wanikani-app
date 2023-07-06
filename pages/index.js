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
  const [userData, setUserData] = useLocalStorageState("userData", {
    defaultValue: [],
  });
  const [assignmentData, setAssignmentData] = useLocalStorageState(
    "assignmentData",
    { defaultValue: [] }
  );
  const [subjectRadicalData, setSubjectRadicalData] = useLocalStorageState(
    "subjectRadicalData",
    {
      defaultValue: [],
    }
  );
  const [subjectKanjiData, setSubjectKanjiData] = useLocalStorageState(
    "subjectKanjiData",
    {
      defaultValue: [],
    }
  );
  const [subjectVocabularyData, setSubjectVocabularyData] =
    useLocalStorageState("subjectVocabularyData", {
      defaultValue: [],
    });
  const [subjectKanaVocabularyData, setSubjectKanaVocabularyData] =
    useLocalStorageState("subjectKanaVocabularyData", {
      defaultValue: [],
    });
  const endpointPaths = [
    "user",
    "assignments",
    "subjects?types=radical",
    "subjects?types=kanji",
    "subjects?types=vocabulary",
    "subjects?types=kana_vocabulary",
  ];
  const router = useRouter();

  useEffect(() => {
    if (apiToken === "") {
      setLoadingIsVisible(false);
    } else {
      setLoadingIsVisible(true);
      fetchUserObjects();
    }
  }, [apiToken]);

  function fetchUserObjects() {
    const fetchPromises = endpointPaths.map((path) => {
      const requestHeaders = new Headers({
        "Wanikani-Revision": "20170710",
        Authorization: "Bearer " + apiToken,
      });

      const apiEndpoint = new Request(`https://api.wanikani.com/v2/${path}`, {
        method: "GET",
        headers: requestHeaders,
      });

      return fetch(apiEndpoint)
        .then((response) => response.json())
        .then((responseBody) => {
          switch (path) {
            case "user":
              setUserData(responseBody.data);
              break;
            case "assignments":
              setAssignmentData(responseBody.data);
              break;
            case "subjects?types=radical":
              setSubjectRadicalData(responseBody.data);
              break;
            case "subjects?types=kanji":
              setSubjectKanjiData(responseBody.data);
              break;
            case "subjects?types=vocabulary":
              setSubjectVocabularyData(responseBody.data);
              break;
            case "subjects?types=kana_vocabulary":
              setSubjectKanaVocabularyData(responseBody.data);
              break;
            default:
              break;
          }
        })
        .catch((error) => {
          console.error(`Error fetching ${path} data:`, error);
        });
    });

    Promise.all(fetchPromises)
      .then(() => {
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }

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

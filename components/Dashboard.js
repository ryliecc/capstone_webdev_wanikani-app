import styled from "styled-components";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import SessionButton from "./SessionButton";
import LevelProgressBar from "./LevelProgressBar";
import SubjectsNavBar from "./SubjectsNavBar";
import LogoutSVG from "../src/heroicons/arrow-left-on-rectangle.svg";
import SettingsSVG from "../src/heroicons/cog-8-tooth.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background-color: #ececec;
  padding: 0.5em;
  padding-bottom: 20em;
  position: relative;
`;

const MainNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 0 0.4em;
`;

const LogoutButton = styled.button`
  border: none;
  background-color: #fafafa;
  align-self: start;
  margin-left: 0.4em;
  border-radius: 0.4em;
  padding: 0.4em;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
`;

const LogoutIcon = styled(LogoutSVG)`
  width: 100%;
  height: 3em;
`;

const SettingsButton = styled.button`
  border: none;
  background-color: #fafafa;
  align-self: end;
  margin-left: 0.4em;
  border-radius: 0.4em;
  padding: 0.4em;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
`;

const SettingsIcon = styled(SettingsSVG)`
  width: 100%;
  height: 3em;
`;

const Greeting = styled.p`
  font-size: 4rem;
  background-color: #f4f4f4;
  border-radius: 5px;
  margin-top: 0.4em;
  padding: 1rem;
  color: #333;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #333;
  background-color: #f4f4f4;
  border-radius: 5px;
  width: 90%;
  text-align: center;
  padding-bottom: 0.5em;
`;

export default function Dashboard() {
  const router = useRouter();
  const [apiToken, setApiToken] = useLocalStorageState("apiToken", {
    defaultValue: "",
  });

  function handleClickLogout() {
    router.push("/");
    setApiToken("");
  }

  function handleClickSettings() {
    router.push("/settings");
  }
  return (
    <Container>
      <MainNavigationContainer>
        <LogoutButton type="button" onClick={handleClickLogout}>
          <LogoutIcon />
        </LogoutButton>
        <SettingsButton type="button" onClick={handleClickSettings}>
          <SettingsIcon />
        </SettingsButton>
      </MainNavigationContainer>
      <Greeting>頑張って!</Greeting>
      <SessionButton
        ButtonColor="#ff00aa"
        ButtonBorderColor="#cc0088"
        onClick={() => router.push("/lessonsession")}
        ButtonText="Lessons:"
        ButtonTextColor="#ffffff"
        summaryType="lessons"
      ></SessionButton>
      <SessionButton
        ButtonColor="#00aaff"
        ButtonBorderColor="#0088cc"
        onClick={() => router.push("/reviewsession")}
        ButtonText="Reviews:"
        ButtonTextColor="#ffffff"
        summaryType="reviews"
      ></SessionButton>
      <LevelProgressBar />
      <Heading>
        Overview:
        <SubjectsNavBar />
      </Heading>
    </Container>
  );
}

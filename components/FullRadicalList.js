import styled from "styled-components";
import { useState, useEffect } from "react";
import LeftArrowSVG from "../src/heroicons/arrow-left.svg";
import RightArrowSVG from "../src/heroicons/arrow-right.svg";
import RadicalList from "./RadicalList.js";

const MainNavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.2em;
  padding-right: 0.4em;
`;

const LeftButton = styled.button.attrs((props) => ({
  $visibilty: props.$visibility,
}))`
  border: none;
  background-color: #fafafa;
  align-self: start;
  margin-left: 0.4em;
  border-radius: 0.4em;
  padding: 0.4em;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
  visibility: ${(props) => (props.$visibility ? "visible" : "hidden")};
`;

const LeftIcon = styled(LeftArrowSVG)`
  width: 100%;
  height: 2.6em;
`;

const LevelHeader = styled.h3`
  margin-left: 0.8em;
  font-size: 2em;
  text-align: center;
`;

const RightButton = styled.button.attrs((props) => ({
  $visibilty: props.$visibility,
}))`
  border: none;
  background-color: #fafafa;
  align-self: end;
  margin-left: 0.4em;
  border-radius: 0.4em;
  padding: 0.4em;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
  visibility: ${(props) => (props.$visibility ? "visible" : "hidden")};
`;

const RightIcon = styled(RightArrowSVG)`
  width: 100%;
  height: 2.6em;
`;

export default function FullRadicalList() {
  const [levelNumber, setLevelNumber] = useState(1);
  const [isMoreLevels, setIsMoreLevels] = useState(true);
  const [isLessLevels, setIsLessLevels] = useState(false);

  useEffect(() => {
    levelNumber === 1 ? setIsLessLevels(false) : setIsLessLevels(true);
    levelNumber === 60 ? setIsMoreLevels(false) : setIsMoreLevels(true);
  }, [levelNumber]);

  function handleClickLeft() {
    setLevelNumber(levelNumber - 1);
  }

  function handleClickRight() {
    setLevelNumber(levelNumber + 1);
  }

  return (
    <>
      <MainNavigationContainer>
        <LeftButton
          $visibility={isLessLevels}
          type="button"
          onClick={handleClickLeft}
        >
          <LeftIcon />
        </LeftButton>
        <LevelHeader>Level {levelNumber}</LevelHeader>
        <RightButton
          $visibility={isMoreLevels}
          type="button"
          onClick={handleClickRight}
        >
          <RightIcon />
        </RightButton>
      </MainNavigationContainer>
      <RadicalList endpointPath={"?levels=" + levelNumber + "&types=radical"} />
    </>
  );
}

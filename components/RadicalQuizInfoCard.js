import styled from "styled-components";
import { useState } from "react";
import useSubjects from "../swr/useSubjects.js";
import ChevronRightSVG from "../src/heroicons/chevron-right.svg";
import ChevronDownSVG from "../src/heroicons/chevron-down.svg";
import KanjiList from "./KanjiList.js";
import StyledApiResponse from "./StyledApiResponse.js";

const ButtonChevronRightImage = styled(ChevronRightSVG)`
  height: 2em;
  border: none;
`;

const ButtonChevronDownImage = styled(ChevronDownSVG)`
  height: 2em;
  border: none;
`;

const ShowButton = styled.button`
  type: button;
  border: none;
`;

const CardHeading = styled.h3`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const CardText = styled.section.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  display: ${(props) => (props.$visibility ? "block" : "none")};
`;

const TextHeading = styled.h4`
  font-size: 1.2em;
  margin: 0.4em;
`;

const TextParagraph = styled.p`
  font-size: 1em;
  line-height: 1.4em;
  margin: 0.4em;
`;

const TextCategorySpan = styled.span`
  color: #999;
  margin-right: 0.4em;
`;

const TextSpan = styled.span`
  color: #333;
`;

export default function RadicalQuizInfoCard({ currentQuizItem }) {
  const [nameIsVisible, setNameIsVisible] = useState(true);
  const [foundInKanjiIsVisible, setFoundInKanjiIsVisible] = useState(false);
  const { subjects } = useSubjects(currentQuizItem?.id);

  const primary = subjects && subjects.meanings[0].meaning;
  const mnemonic = subjects && subjects.meaning_mnemonic;
  const KanjiIds = subjects && subjects.amalgamation_subject_ids;
  const endpointPath = KanjiIds && "?ids=" + KanjiIds.join(",");

  const nameButtonImage = nameIsVisible ? (
    <ButtonChevronDownImage />
  ) : (
    <ButtonChevronRightImage />
  );

  function handleClickName() {
    setNameIsVisible(!nameIsVisible);
  }

  const foundInKanjiButtonImage = foundInKanjiIsVisible ? (
    <ButtonChevronDownImage />
  ) : (
    <ButtonChevronRightImage />
  );

  function handleClickFoundInKanji() {
    setFoundInKanjiIsVisible(!foundInKanjiIsVisible);
  }
  return (
    <>
      <CardHeading>
        <ShowButton onClick={handleClickName}>{nameButtonImage}</ShowButton>
        Name
      </CardHeading>
      <CardText $visibility={nameIsVisible}>
        <TextParagraph>
          <TextCategorySpan>Primary</TextCategorySpan>
          <TextSpan>{primary}</TextSpan>
        </TextParagraph>
        <TextHeading>Explanation</TextHeading>
        <TextParagraph>
          <StyledApiResponse text={mnemonic} />
        </TextParagraph>
      </CardText>
      <CardHeading>
        <ShowButton onClick={handleClickFoundInKanji}>
          {foundInKanjiButtonImage}
        </ShowButton>
        Found in Kanji
      </CardHeading>
      <CardText $visibility={foundInKanjiIsVisible}>
        <KanjiList endpointPath={endpointPath} />
      </CardText>
    </>
  );
}

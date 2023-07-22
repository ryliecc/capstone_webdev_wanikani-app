import styled from "styled-components";
import { useState } from "react";
import ChevronRightSVG from "../src/heroicons/chevron-right.svg";
import ChevronDownSVG from "../src/heroicons/chevron-down.svg";

const BorderArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.5em;
  right: 31%;
`;

const ContentCard = styled.section.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  background-color: #f4f4f4;
  box-shadow: 3px 3px 0 #e1e1e1;
  display: ${(props) => (props.$visibility ? "block" : "none")};
  width: 100%;
  position: relative;
  margin-top: 0.9em;
`;

const ButtonChevronRightImage = styled(ChevronRightSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

const ButtonChevronDownImage = styled(ChevronDownSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

const ShowButton = styled.button`
  type: button;
  border: none;
`;

const CardHeading = styled.h3``;

const CardText = styled.section.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  display: ${(props) => (props.$visibility ? "block" : "none")};
`;

const TextHeading = styled.h4``;

const TextParagraph = styled.p`
  font-size: 1em;
`;

const TextCategorySpan = styled.span`
  color: #999;
`;

const TextSpan = styled.span`
  color: #333;
`;

const CombinationElement = styled.p`
  color: #333;
  margin-top: 0.4em;
`;

const CombinationMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

const KanjiListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 7em;
  height: 7em;
  gap: 0.2em;
  border-radius: 10px;
  background-color: #ff00aa;
  border-bottom: 3px solid #cc0088;
`;

const KanjiListCharacterSpan = styled.span`
  color: #ffffff;
  font-size: 2.2em;
`;

const KanjiListReadingSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

const KanjiListMeaningSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

export default function ReviewSessionVocabInformationCard({
  cardVisibility,
  primaryMeaning,
  alternativeMeaning,
  wordType,
  meaningMnemonic,
  primaryReading,
  readingMnemonic,
  contextSentences,
  compositionKanjiCharacter,
  compositionKanjiReading,
  compositionKanjiMeaning,
}) {
  const [meaningIsVisible, setMeaningIsVisible] = useState(false);
  const [readingIsVisible, setReadingIsVisible] = useState(true);
  const [contextIsVisible, setContextIsVisible] = useState(false);
  const [kanjiCompositionIsVisible, setKanjiCompositionIsVisible] =
    useState(false);

  const meaningButtonImage = meaningIsVisible ? (
    <ButtonChevronDownImage />
  ) : (
    <ButtonChevronRightImage />
  );
  function handleClickMeaning() {
    setMeaningIsVisible(!meaningIsVisible);
  }

  const readingButtonImage = readingIsVisible ? (
    <ButtonChevronDownImage />
  ) : (
    <ButtonChevronRightImage />
  );
  function handleClickReading() {
    setReadingIsVisible(!readingIsVisible);
  }

  const contextButtonImage = contextIsVisible ? (
    <ButtonChevronDownImage />
  ) : (
    <ButtonChevronRightImage />
  );
  function handleClickContext() {
    setContextIsVisible(!contextIsVisible);
  }

  const kanjiCompositionButtonImage = kanjiCompositionIsVisible ? (
    <ButtonChevronDownImage />
  ) : (
    <ButtonChevronRightImage />
  );
  function handleClickKanjiComposition() {
    setKanjiCompositionIsVisible(!kanjiCompositionIsVisible);
  }

  const contextSentencesElements = contextSentences.map(
    (contextSentence, index) => {
      return (
        <div key={index}>
          <CombinationElement>{contextSentence.ja}</CombinationElement>
          <CombinationMeaning>{contextSentence.en}</CombinationMeaning>
        </div>
      );
    }
  );

  console.log("test log");

  return (
    <>
      <ContentCard $visibility={cardVisibility}>
        <BorderArrow />
        <CardHeading>
          <ShowButton onClick={handleClickMeaning}>
            {meaningButtonImage}
          </ShowButton>
          Meaning
        </CardHeading>
        <CardText $visibility={meaningIsVisible}>
          <TextParagraph>
            <TextCategorySpan>Primary</TextCategorySpan>
            <TextSpan>{primaryMeaning}</TextSpan>
          </TextParagraph>
          <TextParagraph>
            <TextCategorySpan>Alternatives</TextCategorySpan>
            <TextSpan>{alternativeMeaning}</TextSpan>
          </TextParagraph>
          <TextParagraph>
            <TextCategorySpan>Word Type</TextCategorySpan>
            <TextSpan>{wordType}</TextSpan>
          </TextParagraph>
          <TextHeading>Explanation</TextHeading>
          <TextParagraph>{meaningMnemonic}</TextParagraph>
        </CardText>
        <CardHeading>
          <ShowButton onClick={handleClickReading}>
            {readingButtonImage}
          </ShowButton>
          Reading
        </CardHeading>
        <CardText $visibility={readingIsVisible}>
          <TextParagraph>{primaryReading}</TextParagraph>
          <TextHeading>Explanation</TextHeading>
          <TextParagraph>{readingMnemonic}</TextParagraph>
        </CardText>
        <CardHeading>
          <ShowButton onClick={handleClickContext}>
            {contextButtonImage}
          </ShowButton>
          Context
        </CardHeading>
        <CardText $visibility={contextIsVisible}>
          <TextHeading>Context Sentences</TextHeading>
          {contextSentencesElements}
        </CardText>
        <CardHeading>
          <ShowButton onClick={handleClickKanjiComposition}>
            {kanjiCompositionButtonImage}
          </ShowButton>
          Kanji Composition
        </CardHeading>
        <CardText $visibility={kanjiCompositionIsVisible}>
          <KanjiListItem>
            <KanjiListCharacterSpan>
              {compositionKanjiCharacter}
            </KanjiListCharacterSpan>
            <KanjiListReadingSpan>
              {compositionKanjiReading}
            </KanjiListReadingSpan>
            <KanjiListMeaningSpan>
              {compositionKanjiMeaning}
            </KanjiListMeaningSpan>
          </KanjiListItem>
        </CardText>
      </ContentCard>
    </>
  );
}

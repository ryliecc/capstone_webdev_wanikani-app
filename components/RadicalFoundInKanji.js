import styled from "styled-components";

const Heading = styled.h3``;
const KanjiList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.5em;
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
const KanjiCharacterSpan = styled.span`
  color: #ffffff;
  font-size: 2.2em;
`;
const KanjiReadingSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;
const KanjiMeaningSpan = styled.span`
  color: #ffffff;
  font-size: 0.9em;
`;

export default function RadicalFoundInKanji() {
  return (
    <>
      <Heading>Found in Kanji</Heading>
      <KanjiList>
        <KanjiListItem>
          <KanjiCharacterSpan>了</KanjiCharacterSpan>
          <KanjiReadingSpan>りょう</KanjiReadingSpan>
          <KanjiMeaningSpan>Finish</KanjiMeaningSpan>
        </KanjiListItem>
      </KanjiList>
    </>
  );
}

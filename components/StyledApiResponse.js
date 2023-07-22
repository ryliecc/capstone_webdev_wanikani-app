import styled from "styled-components";

const StyledJa = styled.span``;

const StyledRadical = styled.span`
  color: #ffffff;
  background-color: #00aaff;
  padding: 0.05em 0.2em;
  border-radius: 5px;
`;

const StyledKanji = styled.span`
  color: #ffffff;
  background-color: #ff00aa;
  padding: 0.05em 0.2em;
  border-radius: 5px;
`;

const StyledVocabulary = styled.span`
  color: #ffffff;
  background-color: #aa00ff;
  padding: 0.05em 0.2em;
  border-radius: 5px;
`;

const StyledMeaning = styled.span`
  color: #ffffff;
  background-color: #555;
  padding: 0.05em 0.2em;
  border-radius: 5px;
`;

const StyledReading = styled.span`
  color: #ffffff;
  background-color: #555;
  padding: 0.05em 0.2em;
  border-radius: 5px;
`;

export default function StyledApiResponse({ text }) {
  const jaPattern = /<ja>(.*?)<\/ja>/g;
  const radicalPattern = /<radical>(.*?)<\/radical>/g;
  const kanjiPattern = /<kanji>(.*?)<\/kanji>/g;
  const vocabularyPattern = /<vocabulary>(.*?)<\/vocabulary>/g;
  const meaningPattern = /<meaning>(.*?)<\/meaning>/g;
  const readingPattern = /<reading>(.*?)<\/reading>/g;

  function replaceSpansWithComponents(inputText) {
    return inputText?.split(jaPattern).map((item, index) => {
      if (index % 2 === 1) {
        return <StyledJa key={index}>{item}</StyledJa>;
      }
      return item.split(radicalPattern).map((item2, index2) => {
        if (index2 % 2 === 1) {
          return <StyledRadical key={index2}>{item2}</StyledRadical>;
        }
        return item2.split(kanjiPattern).map((item3, index3) => {
          if (index3 % 2 === 1) {
            return <StyledKanji key={index3}>{item3}</StyledKanji>;
          }
          return item3.split(vocabularyPattern).map((item4, index4) => {
            if (index4 % 2 === 1) {
              return <StyledVocabulary key={index4}>{item4}</StyledVocabulary>;
            }
            return item4.split(meaningPattern).map((item5, index5) => {
              if (index5 % 2 === 1) {
                return <StyledMeaning key={index5}>{item5}</StyledMeaning>;
              }
              return item5.split(readingPattern).map((item6, index6) => {
                if (index6 % 2 === 1) {
                  return <StyledReading key={index6}>{item6}</StyledReading>;
                }
                return item6;
              });
            });
          });
        });
      });
    });
  }

  const replacedText = replaceSpansWithComponents(text);

  return <>{replacedText}</>;
}

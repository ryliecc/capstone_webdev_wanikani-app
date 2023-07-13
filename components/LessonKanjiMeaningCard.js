import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  margin-top: 1em;
  padding: 0.4em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: auto;
  padding-bottom: 2em;
  position: relative;
`;

const BorderArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.5em;
  right: 67%;
`;

const Heading = styled.h3`
  color: #333;
`;

const Subheading = styled.h4`
  color: #333;
`;

const Text = styled.p`
  color: #333;
`;

const Paragraph = styled.p`
  display: flex;
  justify-content: flex-start;
  gap: 0.4em;
`;
const CategorySpan = styled.span`
  color: #999;
`;
const MeaningSpan = styled.span``;
const HintsContainer = styled.section``;

export default function LessonKanjiMeaningCard({
  MeaningMnemonic,
  PrimaryMeanings,
  AlternativeMeanings,
  Hint,
}) {
  return (
    <>
      <CardContainer>
        <BorderArrow />
        <Paragraph>
          <CategorySpan>Primary</CategorySpan>
          <MeaningSpan>{PrimaryMeanings}</MeaningSpan>
        </Paragraph>
        <Paragraph>
          <CategorySpan>Alternatives</CategorySpan>
          <MeaningSpan>{AlternativeMeanings}</MeaningSpan>
        </Paragraph>
        <Heading>Explanation</Heading>
        <Text>{MeaningMnemonic}</Text>
        <HintsContainer>
          <Subheading>HINTS</Subheading>
          <Paragraph>{Hint}</Paragraph>
        </HintsContainer>
      </CardContainer>
    </>
  );
}

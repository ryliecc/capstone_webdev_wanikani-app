import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 0.4em;
  text-align: center;
  margin-top: 0.8em;
`;
const Paragraph = styled.p`
  display: flex;
  gap: 0.4em;
  font-size: 1.2em;
  margin: 0.4em;
`;
const CategorySpan = styled.span`
  color: #999;
`;
const MeaningSpan = styled.span`
  color: #333;
`;
const Subheading = styled.h4`
  font-size: 1.2em;
  padding-left: 0.4em;
`;

const HintsArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.4em;
`;
const HintsContainer = styled.section`
  background-color: #f4f4f4;
  margin: 1em;
  margin-top: 1.6em;
  padding: 1em;
  position: relative;
`;

const HintsText = styled.p`
  color: #333;
  font-size: 1em;
  padding: 0.2em;
  padding-left: 0.4em;
`;

export default function KanjiMeaning({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const PrimaryMeanings = subjects?.meanings.filter(
    (item) => item.primary === true
  );
  const Primary = PrimaryMeanings?.map((item) => item.meaning).join(", ");
  const NonPrimaryMeanings = subjects?.meanings.filter(
    (item) => item.primary === false
  );
  let Alternatives = NonPrimaryMeanings?.map((item) => item.meaning).join(`, `);
  if (NonPrimaryMeanings?.length === 0) {
    Alternatives = "None";
  }
  const Mnemonic = subjects?.meaning_mnemonic;
  const Hint = subjects?.meaning_hint;
  return (
    <>
      <Heading>Meaning</Heading>
      <Paragraph>
        <CategorySpan>Primary</CategorySpan>
        <MeaningSpan>{Primary}</MeaningSpan>
      </Paragraph>
      <Paragraph>
        <CategorySpan>Alternatives</CategorySpan>
        <MeaningSpan>{Alternatives}</MeaningSpan>
      </Paragraph>

      <Subheading>Mnemonic</Subheading>
      <Paragraph>{Mnemonic}</Paragraph>
      <HintsContainer>
        <HintsArrow />
        <Subheading>HINTS</Subheading>
        <HintsText>{Hint}</HintsText>
      </HintsContainer>
    </>
  );
}

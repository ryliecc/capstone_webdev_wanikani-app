import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import StyledApiResponse from "./StyledApiResponse.js";

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
const Text = styled.p`
  font-size: 1.2em;
  margin: 0.4em;
  line-height: 1.4em;
`;

export default function VocabularyMeaning({ id }) {
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
  const WordTypes = subjects?.parts_of_speech.join(", ");
  const Mnemonic = subjects?.meaning_mnemonic;
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
      <Paragraph>
        <CategorySpan>Word Types</CategorySpan>
        <MeaningSpan>{WordTypes}</MeaningSpan>
      </Paragraph>

      <Subheading>Explanation</Subheading>
      <Text>
        <StyledApiResponse text={Mnemonic} />
      </Text>
    </>
  );
}

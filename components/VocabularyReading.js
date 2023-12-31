import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import StyledApiResponse from "./StyledApiResponse.js";

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 0.4em;
  text-align: center;
  margin-top: 0.8em;
`;
const ReadingsElement = styled.p`
  font-size: 1.8em;
  margin: 0.4em;
`;
const Subheading = styled.h4`
  font-size: 1.2em;
  padding-left: 0.4em;
`;
const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 0.4em;
  line-height: 1.4em;
`;

export default function VocabularyReading({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);

  const Readings = subjects?.readings.map((item) => item.reading).join(", ");
  const Mnemonic = subjects?.reading_mnemonic;

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }
  return (
    <>
      <Heading>Reading</Heading>
      <ReadingsElement>{Readings}</ReadingsElement>
      <Subheading>Explanation</Subheading>
      <Paragraph>
        <StyledApiResponse text={Mnemonic} />
      </Paragraph>
    </>
  );
}

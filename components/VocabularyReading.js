import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";

const Heading = styled.h3``;
const ReadingsElement = styled.p``;
const Subheading = styled.h4``;
const Paragraph = styled.p``;

export default function VocabularyReading({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const Readings = subjects?.readings.map((item) => item.reading).join(", ");
  const Mnemonic = subjects?.reading_mnemonic;
  return (
    <>
      <Heading>Reading</Heading>
      <ReadingsElement>{Readings}</ReadingsElement>
      <Subheading>Explanation</Subheading>
      <Paragraph>{Mnemonic}</Paragraph>
    </>
  );
}

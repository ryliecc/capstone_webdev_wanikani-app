import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";

const Heading = styled.h3``;
const Paragraph = styled.p``;
const CategorySpan = styled.span``;
const Subheading = styled.h4``;

export default function RadicalNameSection({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const Primary = subjects && subjects.meanings[0].meaning;
  const MeaningMnemonic = subjects && subjects.meaning_mnemonic;
  return (
    <>
      <Heading>Name</Heading>
      <Paragraph>
        <CategorySpan>Primary</CategorySpan>
        {Primary}
      </Paragraph>
      <Subheading>Mnemonic</Subheading>
      <Paragraph>{MeaningMnemonic}</Paragraph>
    </>
  );
}

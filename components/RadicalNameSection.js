import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";

const Heading = styled.h3`
  font-size: 1.6em;
  margin: 0.4em;
`;
const Paragraph = styled.p`
  display: flex;
  gap: 0.8em;
  font-size: 1em;
  margin: 0.6em;
`;
const CategorySpan = styled.span`
  color: #999;
`;
const Subheading = styled.h4`
  font-size: 1.2em;
  margin: 0.4em;
`;

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

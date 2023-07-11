import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import { uid } from "uid";

const Heading = styled.h3``;
const Subheading = styled.h4``;
const SentenceContainer = styled.div``;
const SentenceElement = styled.p`
  color: #333;
`;

const SentenceMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

export default function VocabularyContext({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const Sentences = subjects?.context_sentences.map((item) => (
    <SentenceContainer key={uid()}>
      <SentenceElement>{item.ja}</SentenceElement>
      <SentenceMeaning>{item.en}</SentenceMeaning>
    </SentenceContainer>
  ));
  return (
    <>
      <Heading>Context</Heading>
      <Subheading>Context Sentences</Subheading>
      {Sentences}
    </>
  );
}

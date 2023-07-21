import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import { uid } from "uid";

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 0.4em;
  text-align: center;
  margin-top: 0.8em;
`;
const Subheading = styled.h4`
  font-size: 1.2em;
  padding-left: 0.4em;
`;
const SentenceContainer = styled.div`
  font-size: 1em;
  margin: 0.6em;
`;
const SentenceElement = styled.p`
  color: #333;
`;

const SentenceMeaning = styled.p`
  color: #999;
  margin-bottom: 1em;
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

import styled from "styled-components";
import { useState } from "react";
import { uid } from "uid";

const CardContainer = styled.div`
  background-color: #fafafa;
  margin: 0.8em;
  padding: 0.6em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

const CombinationElement = styled.p`
  color: #333;
  margin-top: 0.4em;
`;

const CombinationMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

const Subheading = styled.h3`
  color: #333;
`;

const SentenceElement = styled.p`
  color: #333;
`;

const SentenceMeaning = styled.p`
  color: #333;
  margin-bottom: 0.5em;
`;

export default function LessonContextCard({ contextSentences }) {
  const SentenceElements = contextSentences?.map((sentence, index) => {
    return (
      <div key={index}>
        <SentenceElement>{sentence.ja}</SentenceElement>
        <SentenceMeaning>{sentence.en}</SentenceMeaning>
      </div>
    );
  });
  return (
    <CardContainer>
      <Subheading>Context Sentences</Subheading>
      {SentenceElements}
    </CardContainer>
  );
}

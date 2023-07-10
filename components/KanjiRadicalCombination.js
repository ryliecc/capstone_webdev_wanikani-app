import styled from "styled-components";
import SingleRadical from "./SingleRadical.js";

const Heading = styled.h3``;

const RadicalCombinationContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PlusText = styled.span`
  font-size: 3em;
  margin: 0.4em;
`;

export default function RadicalCombination() {
  // component_subject_ids
  return (
    <>
      <Heading>Radical Combination</Heading>
      <RadicalCombinationContainer>
        <SingleRadical />
        <PlusText>+</PlusText>
        <SingleRadical />
      </RadicalCombinationContainer>
    </>
  );
}

import styled from "styled-components";

const RadicalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 5em;
  gap: 0.2em;
  border-radius: 10px;
  background-color: #00aaff;
  border-bottom: 3px solid #0088cc;
`;

const RadicalCharacter = styled.span`
  color: #ffffff;
  font-size: 1.8em;
`;

const RadicalMeaning = styled.span`
  color: #ffffff;
  font-size: 0.7em;
`;

export default function SingleRadical() {
  return (
    <RadicalContainer>
      <RadicalCharacter>ト</RadicalCharacter>
      <RadicalMeaning>Toe</RadicalMeaning>
    </RadicalContainer>
  );
}

import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingContainer = styled.div.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  display: ${(props) => (props.$visibility ? "block" : "none")};
`;

const LoadingAnimation = styled.div`
  width: 3rem;
  height: 3rem;
  border: 9px solid #f3f3f3;
  border-top: 10px solid #9c41f2;
  border-radius: 100%;
  margin: auto;
  animation: ${spin} 1s infinite linear;
`;

const LoadingText = styled.p`
  font-size: 1.4em;
  text-align: center;
`;

export default function LoadingComponent({ loadingIsVisible }) {
  return (
    <LoadingContainer $visibility={loadingIsVisible}>
      <LoadingAnimation />
      <LoadingText>Loading ...</LoadingText>
    </LoadingContainer>
  );
}

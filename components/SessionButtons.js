import styled from "styled-components";

const ButtonElement = styled.button`
  border-radius: 24px;
  width: 70%;
  height: 5rem;
  background-color: props.color;
  display: grid;
  grid-template-areas: "svg text" "svg number";
  grid-template-columns: 1fr 1fr;
`;

const ButtonIllustration = styled.svg`
  grid-area: svg;
  xmlns: "http://www.w3.org/2000/svg";
  viewbox: "0 0 22 22";
  margin: 0;
  padding: 0;
`;

const ButtonText = styled.span`
  grid-area: text;
  color: var(--secondary-text-color);
`;

const ButtonNumber = styled.span`
  grid-area: number;
  color: var(--secondary-text-color);
`;

export default function SessionButtons() {
  return (
    <>
      <ButtonElement
        color="var(--secondary-color)"
        onClick={() => (window.location.href = "/")}
      >
        <ButtonIllustration>
          <path d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8M8 6v10h6v-2h-4V6H8Z" />
        </ButtonIllustration>
        <ButtonText>Lessons:</ButtonText>
        <ButtonNumber>10</ButtonNumber>
      </ButtonElement>
      <ButtonElement
        color="var(--primary-color)"
        onClick={() => (window.location.href = "/")}
      >
        <ButtonIllustration>
          <path d="M15 1v1h2v1h1v1h1v1h1v2h1v8h-1v2h-1v1h-1v1h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h8m-1 2H8v1H6v1H5v1H4v2H3v6h1v2h1v1h1v1h2v1h6v-1h2v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-2V3M8 6h5v1h1v4h-1v2h1v3h-2v-2h-1v-2h-1v4H8V6m2 2v2h2V8h-2Z" />
        </ButtonIllustration>
        <ButtonText>Reviews:</ButtonText>
        <ButtonNumber>187</ButtonNumber>
      </ButtonElement>
    </>
  );
}

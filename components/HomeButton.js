import styled from "styled-components";

const HomeButtonElement = styled.button`
  border: none;
  background-color: transparent;
  align-self: start;
`;

const HomeSVG = styled.svg`
  xmlns: "http://www.w3.org/2000/svg";
  viewbox: "0 0 24 24";
  fill: black;
  width: 5em;
`;

export default function HomeButton() {
  return (
    <HomeButtonElement onClick={() => (window.location.href = "/")}>
      <HomeSVG viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z" />
      </HomeSVG>
    </HomeButtonElement>
  );
}

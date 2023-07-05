import styled from "styled-components";

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  background-color: #f4f4f4;
  border-bottom: 1px solid #d5d5d5;
`;

const HeaderLink = styled.a`
  text-decoration: none;
  color: #ff00aa;
  &visited: none;
`;

export default function AppHeader() {
  return (
    <>
      <Heading>
        <HeaderLink href="/dashboard">WaniKani</HeaderLink>
      </Heading>
    </>
  );
}

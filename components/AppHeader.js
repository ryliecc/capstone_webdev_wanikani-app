import styled from "styled-components";

const Heading = styled.h1``;

const HeaderLink = styled.a``;

export default function AppHeader() {
  return (
    <>
      <Heading>
        <HeaderLink href="/">WaniKani</HeaderLink>
      </Heading>
    </>
  );
}

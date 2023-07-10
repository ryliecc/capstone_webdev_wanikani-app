import styled from "styled-components";

const Heading = styled.h3``;
const Paragraph = styled.p``;
const CategorySpan = styled.span``;
const Subheading = styled.h4``;
const HintsContainer = styled.section``;

export default function KanjiMeaning() {
  return (
    <>
      <Heading>Meaning</Heading>
      <Paragraph>
        <CategorySpan>Primary</CategorySpan>Above
        <CategorySpan>Alternatives</CategorySpan>Up, Over
      </Paragraph>
      <Subheading>Mnemonic</Subheading>
      <Paragraph>Lorem ipsum.</Paragraph>
      <HintsContainer>
        <Subheading>HINTS</Subheading>
        <Paragraph>Lorem ipsum.</Paragraph>
      </HintsContainer>
    </>
  );
}

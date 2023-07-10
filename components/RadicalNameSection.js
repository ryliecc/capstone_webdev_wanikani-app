import styled from "styled-components";

const Heading = styled.h3``;
const Paragraph = styled.p``;
const CategorySpan = styled.span``;
const Subheading = styled.h4``;

export default function RadicalNameSection() {
  return (
    <>
      <Heading>Name</Heading>
      <Paragraph>
        <CategorySpan>Primary</CategorySpan>Barb
      </Paragraph>
      <Subheading>Mnemonic</Subheading>
      <Paragraph>Lorem ipsum.</Paragraph>
    </>
  );
}

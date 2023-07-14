import styled from "styled-components";

const ContentCard = styled.section.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  background-color: #f4f4f4;
  box-shadow: 3px 3px 0 #e1e1e1;
  display: ${(props) => (props.$visibility ? "block" : "none")};
  width: 100%;
  position: relative;
  margin-top: 0.9em;
`;

const BorderArrow = styled.div.attrs((props) => ({
  $position: props.$position,
}))`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.5em;
  right: ${(props) => props.$position};
`;

const TextParagraph = styled.p`
  font-size: 1em;
`;

export default function WrongAnswerCard({
  cardVisibility,
  ArrowPositionRight,
}) {
  return (
    <>
      <ContentCard $visibility={cardVisibility}>
        <BorderArrow $position={ArrowPositionRight} />
        <TextParagraph>
          Need help? View the correct reading and mnemonic.
        </TextParagraph>
      </ContentCard>
    </>
  );
}

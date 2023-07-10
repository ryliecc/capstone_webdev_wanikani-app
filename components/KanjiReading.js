import styled from "styled-components";

const Heading = styled.h3``;

const ReadingList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const ReadingListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const ReadingCategory = styled.span``;

const ReadingKana = styled.span``;

const Subheading = styled.h4``;

const Paragraph = styled.p``;

const HintContainer = styled.section``;

export default function KanjiReading() {
  return (
    <>
      <Heading>Readings</Heading>
      <ReadingList>
        <ReadingListItem>
          <ReadingCategory>On&apos;yomi</ReadingCategory>
          <ReadingKana>じょう</ReadingKana>
        </ReadingListItem>
        <ReadingListItem>
          <ReadingCategory>Kun&apos;yomi</ReadingCategory>
          <ReadingKana>うえ, あ, のぼ, うわ, かみ</ReadingKana>
        </ReadingListItem>
        <ReadingListItem>
          <ReadingCategory>Nanori</ReadingCategory>
          <ReadingKana>None</ReadingKana>
        </ReadingListItem>
      </ReadingList>
      <Subheading>Mnemonic</Subheading>
      <Paragraph>Lorem Ipsum.</Paragraph>
      <HintContainer>
        <Subheading>HINTS</Subheading>
        <Paragraph>Lorem Ipsum.</Paragraph>
      </HintContainer>
    </>
  );
}

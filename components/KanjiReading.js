import styled from "styled-components";
import useSubjects from "../swr/useSubjects";
import StyledApiResponse from "./StyledApiResponse.js";

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 0.4em;
  text-align: center;
  margin-top: 0.8em;
`;

const ReadingList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0.8em;
`;

const ReadingListItem = styled.li.attrs((props) => ({
  $color: props.$color,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
  color: ${(props) => props.$color};
`;

const ReadingCategory = styled.span`
  font-size: 1.4em;
`;

const ReadingKana = styled.span`
  font-size: 1.2em;
`;

const Subheading = styled.h4`
  font-size: 1.2em;
  padding-left: 0.4em;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 0.4em;
  line-height: 1.4em;
`;

const HintContainer = styled.section`
  background-color: #f4f4f4;
  margin: 1em;
  margin-top: 1.6em;
  padding: 1em;
  position: relative;
`;

const HintsArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.4em;
`;

const HintsText = styled.p`
  color: #333;
  font-size: 1em;
  padding: 0.2em;
  padding-left: 0.4em;
  line-height: 1.4em;
`;

export default function KanjiReading({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }
  const OnYomis = subjects?.readings.filter((item) => item.type === "onyomi");
  const OnYomiString = OnYomis?.map((item) => item.reading).join(", ");
  const KunYomis = subjects?.readings.filter((item) => item.type === "kunyomi");
  let KunYomiString = KunYomis?.map((item) => item.reading).join(", ");
  if (KunYomis?.length === 0) {
    KunYomiString = "None";
  }
  const Nanoris = subjects?.readings.filter((item) => item.type === "nanori");
  let NanoriString = Nanoris?.map((item) => item.reading).join(", ");
  if (Nanoris?.length === 0) {
    NanoriString = "None";
  }
  const Mnemonic = subjects?.reading_mnemonic;
  const Hint = subjects?.reading_hint;
  return (
    <>
      <Heading>Readings</Heading>
      <ReadingList>
        <ReadingListItem $color="#333">
          <ReadingCategory>On&apos;yomi</ReadingCategory>
          <ReadingKana>{OnYomiString}</ReadingKana>
        </ReadingListItem>
        <ReadingListItem $color="#999">
          <ReadingCategory>Kun&apos;yomi</ReadingCategory>
          <ReadingKana>{KunYomiString}</ReadingKana>
        </ReadingListItem>
        <ReadingListItem $color="#999">
          <ReadingCategory>Nanori</ReadingCategory>
          <ReadingKana>{NanoriString}</ReadingKana>
        </ReadingListItem>
      </ReadingList>
      <Subheading>Mnemonic</Subheading>
      <Paragraph>
        <StyledApiResponse text={Mnemonic} />
      </Paragraph>
      <HintContainer>
        <HintsArrow />
        <Subheading>HINTS</Subheading>
        <HintsText>
          <StyledApiResponse text={Hint} />
        </HintsText>
      </HintContainer>
    </>
  );
}

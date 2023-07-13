import styled from "styled-components";

const CardContainer = styled.div`
  background-color: #f4f4f4;
  margin: 0.8em;
  margin-top: 1em;
  padding: 0.4em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  height: auto;
  padding-bottom: 2em;
  position: relative;
`;

const BorderArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 1.6em solid transparent;
  border-right: 1.6em solid transparent;
  border-bottom: 1.6em solid #f4f4f4;
  position: absolute;
  top: -1.5em;
  right: 43%;
`;

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

export default function LessonKanjiReadingCard({ currentLesson }) {
  const OnYomis = currentLesson?.data.readings.filter(
    (item) => item.type === "onyomi"
  );
  const OnYomiString = OnYomis?.map((item) => item.reading).join(", ");
  const KunYomis = currentLesson.data.readings.filter(
    (item) => item.type === "kunyomi"
  );
  const KunYomiString = KunYomis?.map((item) => item.reading).join(", ");
  const Nanoris = currentLesson?.data.readings.filter(
    (item) => item.type === "nanori"
  );
  let NanoriString = Nanoris?.map((item) => item.reading).join(", ");
  if (Nanoris?.length === 0) {
    NanoriString = "None";
  }
  const Mnemonic = currentLesson?.data.reading_mnemonic;
  const Hint = currentLesson?.data.reading_hint;
  return (
    <>
      <CardContainer>
        <BorderArrow />
        <Heading>Readings</Heading>
        <ReadingList>
          <ReadingListItem>
            <ReadingCategory>On&apos;yomi</ReadingCategory>
            <ReadingKana>{OnYomiString}</ReadingKana>
          </ReadingListItem>
          <ReadingListItem>
            <ReadingCategory>Kun&apos;yomi</ReadingCategory>
            <ReadingKana>{KunYomiString}</ReadingKana>
          </ReadingListItem>
          <ReadingListItem>
            <ReadingCategory>Nanori</ReadingCategory>
            <ReadingKana>{NanoriString}</ReadingKana>
          </ReadingListItem>
        </ReadingList>
        <Subheading>Mnemonic</Subheading>
        <Paragraph>{Mnemonic}</Paragraph>
        <HintContainer>
          <Subheading>HINTS</Subheading>
          <Paragraph>{Hint}</Paragraph>
        </HintContainer>
      </CardContainer>
    </>
  );
}

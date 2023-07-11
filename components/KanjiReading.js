import styled from "styled-components";
import useSubjects from "../swr/useSubjects";

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
  const KunYomiString = KunYomis?.map((item) => item.reading).join(", ");
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
    </>
  );
}

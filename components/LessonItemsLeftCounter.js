import styled from "styled-components";
import InboxSVG from "../src/heroicons/inbox.svg";
import useSubjects from "../swr/useSubjects.js";

const CounterContainer = styled.div`
  display: flex;
  padding: 0.4em;
  align-items: center;
  gap: 0.4em;
  margin-right: 0.4em;
  background-color: #fafafa;
  border-radius: 5px;
`;

const Icon = styled(InboxSVG)`
  height: 2.2em;
  width: 100%;
  border: none;
`;

const LeftRadicals = styled.p`
  font-size: 1.6em;
  color: #ffffff;
  background-color: #00aaff;
  border-radius: 3px;
  padding: 0.2em;
`;

const LeftKanji = styled.p`
  font-size: 1.6em;
  color: #ffffff;
  background-color: #ff00aa;
  border-radius: 3px;
  padding: 0.2em;
`;

const LeftVocabulary = styled.p`
  font-size: 1.6em;
  color: #ffffff;
  background-color: #aa00ff;
  border-radius: 3px;
  padding: 0.2em;
`;

export default function LessonItemsLeftCounter({ LessonIds }) {
  const endpointPath = LessonIds && "?ids=" + LessonIds;
  const { subjects, isLoading, isError } = useSubjects(endpointPath);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const LessonRadicals = subjects?.filter((item) => item.object === "radical");
  const RadicalsAmount = LessonRadicals?.length;

  const LessonKanji = subjects?.filter((item) => item.object === "kanji");
  const KanjiAmount = LessonKanji?.length;

  const LessonVocabulary = subjects?.filter(
    (item) => item.object === "vocabulary"
  );
  const VocabularyAmount = LessonVocabulary?.length;

  return (
    <CounterContainer>
      <Icon />
      <LeftRadicals>{RadicalsAmount}</LeftRadicals>
      <LeftKanji>{KanjiAmount}</LeftKanji>
      <LeftVocabulary>{VocabularyAmount}</LeftVocabulary>
    </CounterContainer>
  );
}

import LessonSessionItem from "../components/LessonSessionItem.js";
import LessonSessionMenuBar from "../components/LessonSessionMenuBar.js";
import LessonSessionProgress from "../components/LessonSessionProgress.js";
import useSummary from "../swr/useSummary.js";
import useSubjects from "../swr/useSubjects.js";
import LoadingComponent from "../components/Loading.js";
import { useState, useEffect } from "react";

export default function LessonSessionPage() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [currentLessonPart, setCurrentLessonPart] = useState("lesson");
  const [quizItems, setQuizItems] = useState([]);
  const { summary } = useSummary();
  const LessonIds = summary?.lessons[0]?.subject_ids;
  const { subjects, isLoading, isError } = useSubjects(
    LessonIds && "?ids=" + LessonIds.join(",")
  );

  const OrderedLessons =
    subjects?.sort((a, b) => {
      return a.data.level - b.data.level;
    }) || [];

  const CurrentLessons = OrderedLessons?.slice(0, 5);

  const CurrentLesson = CurrentLessons && CurrentLessons[currentLessonIndex];

  const QuizItemsLength = quizItems.length;

  useEffect(() => {
    if (QuizItemsLength === 0 && CurrentLessons) {
      CurrentLessons.forEach((item) => {
        if (item.object === "radical") {
          const newQuizItem = {
            id: item.id,
            subjectType: "Radical",
            expectedAnswerType: "Meaning",
            characters: item.data.characters,
            expectedAnswer: item.data.meanings.map((meaning) => {
              if (meaning.accepted_answer === true) {
                return meaning.meaning;
              }
            }),
          };
          setQuizItems((prevQuizItems) => [...prevQuizItems, newQuizItem]);
        } else if (item.object === "kana_vocabulary") {
          const newQuizItem = {
            id: item.id,
            subjectType: "Vocabulary",
            expectedAnswerType: "Meaning",
            characters: item.data.characters,
            expectedAnswer: item.data.meanings.map((meaning) => {
              if (meaning.accepted_answer === true) {
                return meaning.meaning;
              }
            }),
          };
          setQuizItems((prevQuizItems) => [...prevQuizItems, newQuizItem]);
        } else if (item.object === "vocabulary") {
          const newQuizItems = [
            {
              id: item.id + "meaning",
              subjectType: "Vocabulary",
              expectedAnswerType: "Meaning",
              characters: item.data.characters,
              expectedAnswer: item.data.meanings.map((meaning) => {
                if (meaning.accepted_answer === true) {
                  return meaning.meaning;
                }
              }),
            },
            {
              id: item.id + "reading",
              subjectType: "Vocabulary",
              expectedAnswerType: "Reading",
              characters: item.data.characters,
              expectedAnswer: item.data.readings.map((reading) => {
                if (reading.accepted_answer === true) {
                  return reading.reading;
                }
              }),
            },
          ];
          setQuizItems((prevQuizItems) => [...prevQuizItems, ...newQuizItems]);
        } else {
          const newQuizItems = [
            {
              id: item.id + "meaning",
              subjectType: "Kanji",
              expectedAnswerType: "Meaning",
              characters: item.data.characters,
              expectedAnswer: item.data.meanings.map((meaning) => {
                if (meaning.accepted_answer === true) {
                  return meaning.meaning;
                }
              }),
            },
            {
              id: item.id + "reading",
              subjectType: "Kanji",
              expectedAnswerType: "Reading",
              characters: item.data.characters,
              expectedAnswer: item.data.readings.map((reading) => {
                if (reading.accepted_answer === true) {
                  return reading.reading;
                }
              }),
            },
          ];
          setQuizItems((prevQuizItems) => [...prevQuizItems, ...newQuizItems]);
        }
      });
    }
  }, [QuizItemsLength, CurrentLessons]);

  const CurrentQuizItemIndex = Math.floor(Math.random() * QuizItemsLength);
  const CurrentQuizItem = quizItems[CurrentQuizItemIndex];
  console.log(CurrentQuizItem);

  if (isLoading) {
    return <LoadingComponent loadingIsVisible />;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }
  if (!CurrentQuizItem) {
    return null;
  }
  return (
    <>
      <LessonSessionItem
        currentLesson={CurrentLesson}
        LessonIds={LessonIds}
        currentLessonPart={currentLessonPart}
        currentQuizItem={CurrentQuizItem}
      />
      <LessonSessionMenuBar
        currentLesson={CurrentLesson}
        currentLessonIndex={currentLessonIndex}
        setCurrentLessonIndex={setCurrentLessonIndex}
        currentLessonPart={currentLessonPart}
        setCurrentLessonPart={setCurrentLessonPart}
        currentLessons={CurrentLessons}
        currentQuizItem={CurrentQuizItem}
      />
      <LessonSessionProgress
        currentLessonIndex={currentLessonIndex}
        currentLessonPart={currentLessonPart}
      />
    </>
  );
}

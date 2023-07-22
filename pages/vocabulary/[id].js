import { useRouter } from "next/router";
import AppHeader from "../../components/AppHeader.js";
import SubjectsNavBar from "../../components/SubjectsNavBar.js";
import DetailsPageHeader from "../../components/DetailsPageHeader.js";
import VocabularyMeaning from "../../components/VocabularyMeaning.js";
import VocabularyReading from "../../components/VocabularyReading.js";
import VocabularyContext from "../../components/VocabularyContext.js";
import VocabularyKanjiComposition from "../../components/VocabularyKanjiComposition.js";

export default function VocabularyDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
      <DetailsPageHeader id={id} typeColor="#AA00FF" />
      <VocabularyMeaning id={id} />
      <VocabularyReading id={id} />
      <VocabularyContext id={id} />
      <VocabularyKanjiComposition id={id} />
    </>
  );
}

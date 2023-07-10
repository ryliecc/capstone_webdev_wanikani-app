import { useRouter } from "next/router";
import AppHeader from "../../components/AppHeader";
import SubjectsNavBar from "../../components/SubjectsNavBar.js";
import DetailsPageHeader from "../../components/DetailsPageHeader.js";
import RadicalCombination from "../../components/KanjiRadicalCombination.js";
import KanjiMeaning from "../../components/KanjiMeaning.js";
import KanjiReading from "../../components/KanjiReading.js";
import KanjiFoundInVocabulary from "../../components/KanjiFoundInVocabulary.js";

export default function KanjiDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
      <DetailsPageHeader id={id} />
      <RadicalCombination />
      <KanjiMeaning />
      <KanjiReading />
      <KanjiFoundInVocabulary />
    </>
  );
}

import { useRouter } from "next/router";
import AppHeader from "../components/AppHeader.js";
import SubjectsNavBar from "../components/SubjectsNavBar.js";
import DetailsPageHeader from "../components/DetailsPageHeader.js";
import RadicalNameSection from "../components/RadicalNameSection.js";
import RadicalFoundInKanji from "../components/RadicalFoundInKanji.js";
import RadicalProgression from "../components/RadicalProgression.js";

export default function RadicalPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
      <DetailsPageHeader id={id} />
      <RadicalNameSection id={id} />
      <RadicalFoundInKanji id={id} />
      <RadicalProgression id={id} />
    </>
  );
}

import { useRouter } from "next/router";
import AppHeader from "../../components/AppHeader.js";
import SubjectsNavBar from "../../components/SubjectsNavBar.js";
import DetailsPageHeader from "../../components/DetailsPageHeader.js";
import RadicalNameSection from "../../components/RadicalNameSection.js";
import RadicalFoundInKanji from "../../components/RadicalFoundInKanji.js";

export default function RadicalDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
      <DetailsPageHeader id={id} typeColor="#0af" />
      <RadicalNameSection id={id} />
      <RadicalFoundInKanji id={id} />
    </>
  );
}

import { useRouter } from "next/router";
import AppHeader from "../../components/AppHeader.js";
import SubjectsNavBar from "../../components/SubjectsNavBar.js";
import DetailsPageHeader from "../../components/DetailsPageHeader.js";

export default function VocabularyDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
      <DetailsPageHeader id={id} />
    </>
  );
}

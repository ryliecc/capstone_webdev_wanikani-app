import { useRouter } from "next/router";
import AppHeader from "../../components/AppHeader";
import SubjectsNavBar from "../../components/SubjectsNavBar.js";
import DetailsPageHeader from "../../components/DetailsPageHeader.js";

export default function KanjiDetailsPage() {
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

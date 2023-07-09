import { useRouter } from "next/router";
import styled from "styled-components";
import AppHeader from "../components/AppHeader.js";
import SubjectsNavBar from "../components/SubjectsNavBar.js";

export default function RadicalPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <AppHeader />
      <SubjectsNavBar />
    </>
  );
}

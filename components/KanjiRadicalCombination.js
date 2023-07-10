import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import RadicalList from "./RadicalList.js";

const Heading = styled.h3``;

export default function RadicalCombination({ id }) {
  const { subjects, isLoading, isError } = useSubjects(id);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const RadicalIds = subjects?.component_subject_ids;
  const endpointPath = "?ids=" + RadicalIds.join(",");

  return (
    <>
      <Heading>Radical Combination</Heading>
      <RadicalList endpointPath={endpointPath} />
    </>
  );
}

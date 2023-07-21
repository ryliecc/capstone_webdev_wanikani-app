import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import { useRouter } from "next/router.js";
import { useState, useEffect } from "react";
import PlusSVG from "../src/heroicons/plus.svg";
import LoadingComponent from "./Loading.js";

const RadicalListElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.5em;
  justify-content: center;
  align-items: center;
`;

const RadicalListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 5em;
  gap: 0.2em;
  border-radius: 10px;
  background-color: #00aaff;
  border-bottom: 3px solid #0088cc;
`;

const RadicalListCharacterSpan = styled.span`
  color: #ffffff;
  font-size: 1.8em;
`;

const RadicalListMeaningSpan = styled.span`
  color: #ffffff;
  font-size: 0.7em;
`;

const RadicalListPlusIcon = styled(PlusSVG).attrs((props) => ({
  $visibility: props.$visibility,
}))`
  display: ${(props) => (props.$visibility ? "block" : "none")};
  height: 2.6em;
`;

export default function RadicalList({ endpointPath, isCombination }) {
  const [isPlusVisible, setIsPlusVisible] = useState(false);
  const router = useRouter();
  const { subjects, isLoading, isError } = useSubjects(endpointPath);

  useEffect(() => {
    isCombination && subjects?.length >= 2
      ? setIsPlusVisible(true)
      : setIsPlusVisible(false);
  }, [isCombination, subjects?.length]);

  const RadicalListItems = subjects?.map((item, index) => {
    return (
      <>
        <RadicalListItem
          key={item.id}
          onClick={() => router.push("/radicals/" + item.id)}
        >
          <RadicalListCharacterSpan>
            {item.data.characters}
          </RadicalListCharacterSpan>
          <RadicalListMeaningSpan>
            {item.data.meanings.map((meaning) => meaning.meaning).join(", ")}
          </RadicalListMeaningSpan>
        </RadicalListItem>
        <RadicalListPlusIcon
          $visibility={index === subjects.length - 1 ? false : isPlusVisible}
        />
      </>
    );
  });

  if (isLoading) {
    return <LoadingComponent loadingIsVisible />;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }
  return <RadicalListElement>{RadicalListItems}</RadicalListElement>;
}

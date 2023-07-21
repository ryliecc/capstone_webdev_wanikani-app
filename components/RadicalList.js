import styled from "styled-components";
import useSubjects from "../swr/useSubjects.js";
import { useRouter } from "next/router.js";
import { useState } from "react";
import PlusSVG from "../src/heroicons/plus.svg";

const RadicalListElement = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.5em;
  justify-content: center;
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
`;

export default function RadicalList({ endpointPath, isCombination }) {
  const [isPlusVisible, setIsPlusVisible] = useState(false);
  const router = useRouter();
  const { subjects, isLoading, isError } = useSubjects(endpointPath);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching...</div>;
  }

  const RadicalListItems = subjects?.map((item) => {
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
        <RadicalListPlusIcon $visibility={isPlusVisible} />
      </>
    );
  });

  return <RadicalListElement>{RadicalListItems}</RadicalListElement>;
}

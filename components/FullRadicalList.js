import { exampleData } from "../src/data.js";

const RadicalData = exampleData.filter((item) => item.type === "radical");

const RadicalHeader = styled.h2`
  text-align: center;
`;

const RadicalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const RadicalListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const RadicalListItemSpan = styled.span`
  width: 50%;
  border: 1px solid black;
  text-align: center;
`;

const FullRadicalList = () => {
  return (
    <>
      <RadicalHeader>部首 - Radicals</RadicalHeader>
      <RadicalList>
        {RadicalData.map((item) => (
          <RadicalListItem key={item.id}>
            <RadicalListItemSpan>{item.data.characters}</RadicalListItemSpan>
            <RadicalListItemSpan>
              {item.data.meanings.map((meaning) => meaning.meaning).join(", ")}
            </RadicalListItemSpan>
          </RadicalListItem>
        ))}
      </RadicalList>
    </>
  );
};

export default FullRadicalList;

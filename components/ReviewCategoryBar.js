import styled from "styled-components";

const BarContainer = styled.div`
  width: 100%;
  height: 4em;
  background-color: #f4f4f4;
  border-bottom: 1px solid #d5d5d5;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

const ObjectSpan = styled.span`
  font-size: 2em;
  font-weight: thin;
  color: #333;
`;

const CategorySpan = styled.span`
  font-size: 2em;
  font-weight: bold;
  color: #333;
`;

export default function ReviewCategoryBar({ objectText, categoryText }) {
  return (
    <BarContainer>
      <ObjectSpan>{objectText}</ObjectSpan>
      <CategorySpan>{categoryText}</CategorySpan>
    </BarContainer>
  );
}

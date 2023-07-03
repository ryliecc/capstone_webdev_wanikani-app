import ReviewSessionItem from "../components/ReviewSessionItem.js";
import ReviewCategoryBar from "../components/ReviewCategoryBar.js";
import AnswerInputField from "../components/AnswerInputField.js";

export default function ReviewSessionPage() {
  return (
    <>
      <ReviewSessionItem itemText="夕べ" />
      <ReviewCategoryBar objectText="Vocabulary" categoryText="Reading" />
      <AnswerInputField placeholderText="答え" />
    </>
  );
}

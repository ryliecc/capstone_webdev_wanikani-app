import styled from "styled-components";
import { ReactComponent as ChevronRightSVG } from "../src/heroicons/chevron-right.svg";

const AnswerFormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;
`;

const AnswerForm = styled.form`
  background-color: #ffffff;
  display: flex;
  justify-content: stretch;
  width: 95%;
  height: 5em;
  box-shadow: 3px 3px 0 #e1e1e1;
`;

const AnswerField = styled.input`
  type: text;
  height: 100%;
  border: none;
  text-align: center;
  font-size: 1.5em;
  autocomplete: none;
  autocapitalize: none;
  autocorrect: none;
  spellcheck: none;
`;

const EnterButton = styled.button`
  border: none;
  width: 5em;
  height: 100%;
`;

const EnterButtonImage = styled.img.attrs((props) => ({
  $src: props.$src,
}))`
  src: ${(props) => props.$src};
  height: 2em;
  width: 2em;
  border: none;
`;

export default function AnswerInputField({ placeholderText }) {
  return (
    <AnswerFormContainer>
      <AnswerForm>
        <AnswerField placeholder={placeholderText} />
        <EnterButton>
          <EnterButtonImage $src={ChevronRightSVG} />
        </EnterButton>
      </AnswerForm>
    </AnswerFormContainer>
  );
}

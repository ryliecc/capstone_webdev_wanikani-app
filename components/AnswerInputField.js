import styled from "styled-components";
import ChevronRightSVG from "../src/heroicons/chevron-right.svg";

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
  position: relative;
  right: 0.8em;
`;

const EnterButtonImage = styled(ChevronRightSVG)`
  height: 2em;
  width: 100%;
  border: none;
`;

export default function AnswerInputField({ placeholderText }) {
  return (
    <AnswerFormContainer>
      <AnswerForm>
        <AnswerField placeholder={placeholderText} />
        <EnterButton>
          <EnterButtonImage />
        </EnterButton>
      </AnswerForm>
    </AnswerFormContainer>
  );
}

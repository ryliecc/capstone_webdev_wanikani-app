import styled from "styled-components";
import ChevronRightSVG from "../src/heroicons/chevron-right.svg";
import ChevronDownSVG from "../src/heroicons/chevron-down.svg";
import { useState } from "react";

const TokenBoxContainer = styled.section.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  display: ${(props) => (props.$visibility ? "block" : "none")};
`;

const TokenBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  border-radius: 10px;
  width: 95%;
  box-shadow: 3px 3px 0 #e1e1e1;
  padding: 0.4em;
  gap: 0.4em;
  align-items: center;
`;

const InputText = styled.p`
  font-size: 1.2em;
  margin: 0.3em;
`;

const TokenForm = styled.form`
  display: flex;
  justify-content: stretch;
  height: 3.6em;
  width: 95%;
  background-color: #ffffff;
  padding: 0.4em;
`;

const InputField = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  text-align: start;
  font-size: 1em;
  outline: none;
  color: #333;
`;

const EnterButton = styled.button`
  border: none;
  height: 100%;
  position: relative;
`;

const EnterButtonImage = styled(ChevronRightSVG)`
  height: 2em;
  width: 100%;
`;

const HelpTextButton = styled.button`
  border: none;
  width: 100%;
  display: flex;
  gap: 0.2em;
  margin-left: 1em;
`;

const HelpText = styled.span`
  font-size: 1em;
`;

const ShowHelpButtonImage = styled(ChevronRightSVG)`
  width: 1.2em;
`;

const ShowHelpButtonClickedImage = styled(ChevronDownSVG)`
  width: 1.2em;
`;

const HelpFullText = styled.p.attrs((props) => ({
  $visibility: props.$visibility,
}))`
  font-size: 1em;
  display: ${(props) => (props.$visibility ? "block" : "none")};
  width: 90%;
  margin-left: 0.6em;
  margin-bottom: 0.6em;
`;

export default function APITokenInputField({
  onSubmitAPITokenInput,
  inputFieldIsVisible,
}) {
  const [helpIsClicked, setHelpIsClicked] = useState(false);
  const displayedHelpButtonImage = helpIsClicked ? (
    <ShowHelpButtonClickedImage />
  ) : (
    <ShowHelpButtonImage />
  );

  function handleClickHelpButton() {
    setHelpIsClicked(!helpIsClicked);
  }
  return (
    <TokenBoxContainer $visibility={inputFieldIsVisible}>
      <TokenBox>
        <InputText>Please enter your personal API Token.</InputText>
        <TokenForm onSubmit={onSubmitAPITokenInput}>
          <InputField
            placeholder="Your API Token here"
            type="text"
            name="tokenInput"
            autoComplete="off"
            autocapitalize="none"
            autocorrect="off"
            spellcheck="false"
            autoFocus
          />
          <EnterButton>
            <EnterButtonImage />
          </EnterButton>
        </TokenForm>

        <HelpTextButton type="button" onClick={handleClickHelpButton}>
          {displayedHelpButtonImage}
          <HelpText>Where do I find my token?</HelpText>
        </HelpTextButton>
        <HelpFullText $visibility={helpIsClicked}>
          Enter the WaniKani Website in your browser and click on your profile
          icon in the upper right corner. Navigate to Settings and then to API
          Tokens. There you can create a new token, give it a name and manage
          its permissions. Please tick all boxes or else the app might not work
          properly.
        </HelpFullText>
      </TokenBox>
    </TokenBoxContainer>
  );
}

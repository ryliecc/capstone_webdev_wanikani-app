import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: stretch;
  gap: 0.3rem;
`;

const NavLink = styled.a.attrs((props) => ({
  $backgroundcolor: props.$backgroundcolor,
  $bordercolor: props.$bordercolor,
}))`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  width: 33%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.$backgroundcolor};
  border-radius: 5px;
  border-bottom: 3px solid ${(props) => props.$bordercolor};
  color: #ffffff;
  &visited: none;
`;

const JapSpan = styled.span`
  font-size: 2rem;
`;

const EnSpan = styled.span`
  font-size: 0.8rem;
`;

export default function SubjectsNavBar() {
  return (
    <NavBar>
      <NavLink
        href="/radicals"
        $backgroundcolor="#00AAFF"
        $bordercolor="#0088cc"
      >
        <JapSpan>部首</JapSpan>
        <EnSpan>Radicals</EnSpan>
      </NavLink>
      <NavLink href="/kanji" $backgroundcolor="#FF00AA" $bordercolor="#cc0088">
        <JapSpan>漢字</JapSpan>
        <EnSpan>Kanji</EnSpan>
      </NavLink>
      <NavLink
        href="/vocabulary"
        $backgroundcolor="#AA00FF"
        $bordercolor="#8800cc"
      >
        <JapSpan>単語</JapSpan>
        <EnSpan>Vocabulary</EnSpan>
      </NavLink>
    </NavBar>
  );
}

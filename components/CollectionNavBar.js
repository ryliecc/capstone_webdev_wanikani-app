import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  width: 100%;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
`;

export default function CollectionNavBar() {
  return (
    <NavBar>
      <NavLink href="/radicals">部首 - Radicals</NavLink>
      <NavLink href="/kanji">漢字 - Kanji</NavLink>
      <NavLink href="/vocabulary">単語 - Vocabulary</NavLink>
    </NavBar>
  );
}

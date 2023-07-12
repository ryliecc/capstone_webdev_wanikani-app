import styled from "styled-components";
import HomeSVG from "../src/heroicons/home.svg";
import { useRouter } from "next/router";

const HomeButtonElement = styled.button`
  border: none;
  background-color: #fafafa;
  align-self: start;
  margin-left: 0.4em;
  border-radius: 0.4em;
  padding: 0.4em;
  box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset,
    0 0 10px rgba(255, 255, 255, 0.5);
`;

const HomeIcon = styled(HomeSVG)`
  width: 100%;
  height: 3em;
`;

export default function HomeButton() {
  const router = useRouter();
  return (
    <HomeButtonElement onClick={() => router.push("/dashboard")}>
      <HomeIcon />
    </HomeButtonElement>
  );
}

import styled from "styled-components";

const Heading = styled.h3``;
const Subheading = styled.h4``;
const StreakContainer = styled.div``;
const StreakName = styled.p``;
const StreakIndicator = styled.span``;
const SrsStageBar = styled.div``;
const SrsStageProgression = styled.div``;
const DatesContainer = styled.div``;
const DateName = styled.p``;
const Date = styled.span``;

export default function RadicalProgression() {
  return (
    <>
      <Heading>Your Progression</Heading>
      <Subheading>Name Answered Correct</Subheading>
      <StreakContainer>
        <StreakName>
          Current Streak <StreakIndicator>8</StreakIndicator>
        </StreakName>
        <StreakName>
          Longest Streak <StreakIndicator>8</StreakIndicator>
        </StreakName>
      </StreakContainer>
      <SrsStageBar>
        <SrsStageProgression />
      </SrsStageBar>
      <DatesContainer>
        <DateName>
          Retired at<Date>November 28, 2021</Date>
        </DateName>
        <DateName>
          Unlocked at<Date>April 26, 2021</Date>
        </DateName>
      </DatesContainer>
    </>
  );
}

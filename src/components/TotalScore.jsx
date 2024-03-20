import styled from "styled-components";

const TotalScore = ({score}) => {

  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
  </ScoreContainer>
    )
}

export default TotalScore

const ScoreContainer = styled.div`
  margin-top: 0;
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
    /* color: ${(props) => (props.score > 0 ? "green" : "red")}; */

  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
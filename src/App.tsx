// import styled from "@emotion/styled";

import styled from "styled-components";
import Circle from "./Circle";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.div`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal"></Circle>
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;

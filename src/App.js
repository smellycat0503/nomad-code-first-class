import styled from "@emotion/styled";

function App() {
  const Wrapper = styled.div`
    display: flex;
  `;
  const Content = styled.div`
    width: 300px;
    height: 300px;
    color: green;
    background-color: pink;
  `;

  return (
    <Wrapper>
      <Content>안녕 세상</Content>
    </Wrapper>
  );
}

export default App;

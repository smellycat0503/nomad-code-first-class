// import styled from "@emotion/styled";

import styled from "styled-components";
import React, { useState } from "react";

function App() {
  const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
  `;
  const H1 = styled.div`
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <Container>
      <H1>안녕</H1>
    </Container>
  );
}

export default App;

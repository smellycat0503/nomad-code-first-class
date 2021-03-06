import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  const [conter, setCounter] = useState<number | string>(1); // 문자열과 숫자열 둘다 ts 허용시키기 <number | string>
  setCounter("야");

  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? "bgColor"}
    ></Container>
  );
};

export default Circle;

import styled from "styled-components";

// 3. ts에게 컨테이너가 bgcolor를 받을거라 얘기할거면 4번으로
interface ContainerProps {
  bgColor: string;
}

// 4. div 뒤에 <ContainerProps> 써주면 ts경고 사라짐
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  //1. 여기 안에 타입스크립트에게 object shape를 설명하는 것임
  bgColor: string;
}

// 2. CircleProps의 타입이 뭔지 컴포넌트에게 말해줘야함
const Circle = ({ bgColor }: CircleProps) => {
  return <Container bgColor={bgColor} />;
};

export default Circle;

interface playerShape {
  name: string;
  age: number;
}

const sayHello = (playObj: playerShape) =>
  `Hello ${playObj.name}. you are ${playObj.name} years old`;

sayHello({ name: "손오옹", age: 12 });

import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
`;

export default function App() {
  return <Circle color="blue" />;
}

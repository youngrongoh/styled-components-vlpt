import React from "react";
import styled, { css } from "styled-components";
import Button from "./components/Buttons";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid #000;
  padding: 1rem;
`;

export default function App() {
  return (
    <AppBlock>
      <Button>Button</Button>
    </AppBlock>
  );
}

import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid #000;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

export default function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595"
        }
      }}
    >
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size="large">Button</Button>
            <Button>Button</Button>
            <Button size="small">Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="large">
              Button
            </Button>
            <Button color="gray">Button</Button>
            <Button color="gray" size="small">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="large">
              Button
            </Button>
            <Button color="pink">Button</Button>
            <Button color="pink" size="small">
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" outline>
              Button
            </Button>
            <Button color="gray" outline>
              Button
            </Button>
            <Button color="pink" size="small" outline>
              Button
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="large" fullWidth>
              Button
            </Button>
            <Button color="gray" fullWidth>
              Button
            </Button>
            <Button color="pink" size="small" fullWidth>
              Button
            </Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

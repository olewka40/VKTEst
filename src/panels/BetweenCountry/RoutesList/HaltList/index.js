import React from "react";
import styled from "styled-components";

export const HaltList = ({ halt }) => {
  console.log(halt);
  return (
    <Container>
      {halt.halt.map((e) => (
        <HaltContainer>
          <div>{e.name}</div>
          <div>{e.time}</div>
          <>|</>
        </HaltContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const HaltContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

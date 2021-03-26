import React from "react";
import styled from "styled-components";
import { Button } from "@vkontakte/vkui";

export const Welcome = ({ setActiveTab }) => {
  return (
    <Container>
      <Text>Добро пожаловать в сервис</Text>
      <Button
        onClick={() => {
          setActiveTab("country");
        }}
      >
        Посмотреть расписание
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const Text = styled.div`
  margin: 20px;
`;

import React from "react";
import styled from "styled-components";
import { Icon28BusOutline } from "@vkontakte/icons";
import { Card } from "@vkontakte/vkui";

export const HaltList = ({ halt }) => {
  console.log(halt);
  return (
    <Container>
      {halt.halt.map((e) => (
        <HaltContainer>
          <StyledCard>
            <Icon>
              <Icon28BusOutline fill="#3f8ae0" />
            </Icon>
            <InfoHalt>
              <Text>Остановка: {e.name}</Text>
              <Text>Время отправки: {e.time || "неизвестно"}</Text>
            </InfoHalt>
          </StyledCard>
        </HaltContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledCard = styled(Card)`
  .Card__in {
    flex-direction: row;
    display: flex;
  }
  display: flex;
  min-width: 250px;
  //height: 75px;
  padding: 5px;
  background: #e1e3e6;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const HaltContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InfoHalt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin: 10px;
`;
const Text = styled.div`
  margin: 5px;
  text-align: left;
  width: 100%;
  text-align: left;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

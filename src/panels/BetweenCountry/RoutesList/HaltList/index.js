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
              <Time>Время отправки: {e.time || "неизвестно"}</Time>
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
  margin: 10px;
  padding: 5px;
  background: #e1e3e6;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  margin: 5px;
`;
const Time = styled.div``;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

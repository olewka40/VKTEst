import React from "react";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import { Card, IOS, platform } from "@vkontakte/vkui";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import styled from "styled-components";
import { shoppingList } from "../constants/config";

const osName = platform();

export const Shop = (props) => {
  console.log(shoppingList);
  return (
    <Panel id={props.id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={props.go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Магазин{" "}
      </PanelHeader>
      <ShopList>
        {shoppingList.map((item) => (
          <StyledCard key={item.id} size="l" mode="outline">
            <Title>
              <Name> {item.name}</Name>
              <Cost>Цена:{item.cost}</Cost>
            </Title>
            <Info>
              <PerSecond>Количество в секунду:{item.perSecond}</PerSecond>
              <Img
                src="https://storage.nana-music.com/picture/807115-2dfac04c-c18f-46bb-a162-6f09009c2e6a-large.png"
                width="100px"
              />
            </Info>
          </StyledCard>
        ))}
      </ShopList>
    </Panel>
  );
};

const ShopList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Img = styled.img`
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;
const Name = styled.div`
  font-weight: bold;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const Cost = styled.div``;
const PerSecond = styled.div`
  color: #4bb34b;
  font-weight: bolder;
`;

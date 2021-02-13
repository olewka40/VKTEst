import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import SwipeableViews from "react-swipeable-views";
import { countryTransport } from "../../../constants/config";
import { HaltList } from "./HaltList";

export const RoutesList = ({ tr }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [halt, setHalt] = useState();

  const [value, setValue] = useState(0);
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const goToRoutesToHalt = (e) => {
    console.log(e);
    const curRoute = tr.routesTO.filter((num) => num.name === e);
    console.log(curRoute[0], 123123123);
    setHalt(curRoute[0]);
    setValue(1);
  };
  const goToRoutesOutHalt = (e) => {
    console.log(e);
    const curRoute = tr.routesOut.filter((num) => num.name === e);
    console.log(curRoute[0]);
    setHalt(curRoute[0]);
    setValue(1);
  };
  return (
    <Container>
      <Tabs>
        <TabsItem selected={activeTab === 0} onClick={() => setActiveTab(0)}>
          Маршрут
        </TabsItem>
        <TabsItem selected={activeTab === 1} onClick={() => setActiveTab(1)}>
          Обратный Маршрут
        </TabsItem>
      </Tabs>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        <div value={value}>
          {activeTab === 0 ? (
            <RoutesContainer>
              {tr.routesTO.map((e) => (
                <Button onClick={() => goToRoutesToHalt(e.name)}>
                  {e.name}
                </Button>
              ))}
            </RoutesContainer>
          ) : (
            <RoutesContainer>
              {tr.routesOut.map((e) => (
                <Button onClick={() => goToRoutesOutHalt(e.name)}>
                  {e.name}
                </Button>
              ))}
            </RoutesContainer>
          )}
        </div>
        <div value={value}>
          {halt !== undefined && <HaltList halt={halt} />}
        </div>
      </SwipeableViews>
    </Container>
  );
};

const Container = styled.div``;
const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Route = styled.div`
  display: flex;
  flex-direction: column;
`;

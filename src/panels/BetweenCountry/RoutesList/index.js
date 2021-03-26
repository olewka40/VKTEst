import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import SwipeableViews from "react-swipeable-views";
import { HaltList } from "./HaltList";

export const RoutesList = ({
  tr,
  setActiveModal,
  setTransportType,
  setModalInfo,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [halt, setHalt] = useState();

  const [value, setValue] = useState(0);
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const goToRoutesToHalt = (e) => {
    const curRoute = tr.routesTo.filter((num) => num.name === e);
    setHalt(curRoute[0]);
    setValue(1);
  };
  const goToRoutesOutHalt = (e) => {
    const curRoute = tr.routesOut.filter((num) => num.name === e);
    setHalt(curRoute[0]);
    setValue(1);
  };

  const openModal = () => {
    setActiveModal("transportRoute");

    if (activeTab === 0) {
      setTransportType("routeTO");
    } else if (activeTab === 1) {
      setTransportType("routeOUT");
    }

    setModalInfo(tr);
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
          <RoutesContainer>
            <StyledButton mode="commerce" onClick={openModal}>
              Информация о Маршруте
            </StyledButton>
            {activeTab === 0 ? (
              <>
                {tr.routesTo.map((e) => (
                  <StyledButton onClick={() => goToRoutesToHalt(e.name)}>
                    {e.name}
                  </StyledButton>
                ))}
              </>
            ) : (
              <>
                {tr.routesOut.map((e) => (
                  <StyledButton onClick={() => goToRoutesOutHalt(e.name)}>
                    {e.name}
                  </StyledButton>
                ))}
              </>
            )}
          </RoutesContainer>
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
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 300px;
  margin: 5px;
`;

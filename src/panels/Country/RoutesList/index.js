import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import SwipeableViews from "react-swipeable-views";
import { Card } from "@vkontakte/vkui";
export const RoutesList = ({
  tr,
  setTransportType,
  setActiveModal,
  setModalInfo,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const [value, setValue] = useState(0);
  const handleChangeIndex = (index) => {
    setValue(index);
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

  // const goToRoutesToHalt = (e) => {
  //   const curRoute = tr.routesTO.filter((num) => num.name === e);
  //   setHalt(curRoute[0]);
  //   setValue(1);
  // };
  // const goToRoutesOutHalt = (e) => {
  //   const curRoute = tr.routesOut.filter((num) => num.name === e);
  //   setHalt(curRoute[0]);
  //   setValue(1);
  // };
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
              Информация о Маршруте{" "}
            </StyledButton>
            {activeTab === 0 ? (
              <>
                {tr.routesTO.map((e) => (
                  <StyledCard
                  // onClick={() => goToRoutesToHalt(e.name)}
                  >
                    {e.name}
                  </StyledCard>
                ))}
              </>
            ) : (
              <>
                {tr.routesOut.map((e) => (
                  <StyledCard
                  // onClick={() => goToRoutesOutHalt(e.name)}
                  >
                    {e.name}
                  </StyledCard>
                ))}
              </>
            )}
          </RoutesContainer>
        </div>

        {/*<div value={value}>*/}
        {/*  {halt !== undefined && <HaltList halt={halt} />}*/}
        {/*</div>*/}
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
  margin-bottom: 52px;
`;
const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 5px;
  background-color: #4986cc;
  height: 30px;
  color: white;
  font-weight: 400;
`;
const StyledButton = styled(Button)`
  width: 300px;
  margin: 5px;
`;

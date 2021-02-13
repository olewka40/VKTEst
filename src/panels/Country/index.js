import React, { useState } from "react";
import styled from "styled-components";
import { countryTransport } from "../../constants/config";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import { FixedLayout } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import SwipeableViews from "react-swipeable-views";
import { RoutesList } from "./RoutesList";

export const Country = () => {
  const [value, setValue] = useState(0);
  const [tr, setTr] = useState();

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const goToRoutes = (e) => {
    const curTr = countryTransport.filter((num) => num.name === e);
    setTr(curTr[0]);
    setValue(1);
  };
  return (
    <Container>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        enableMouseEvents
      >
        <div value={value}>
          {countryTransport.map((e) => (
            <Button onClick={() => goToRoutes(e.name)}>
              Маршрут №{e.name}
            </Button>
          ))}
        </div>
        <div value={value}>{tr !== undefined && <RoutesList tr={tr} />}</div>
      </SwipeableViews>
    </Container>
  );
};

const Container = styled.div``;

import React, { useState } from "react";
import styled from "styled-components";
import { countryTransport } from "../../constants/config";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import SwipeableViews from "react-swipeable-views";
import { RoutesList } from "./RoutesList";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react/cjs/react.production.min";

export const Country = ({ value, setValue, handleChangeIndex }) => {
  const [tr, setTr] = useState();

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
        <Numbers value={value}>
          {countryTransport.map((e) => (
            <StyledButton onClick={() => goToRoutes(e.name)}>
              Маршрут №{e.name}
            </StyledButton>
          ))}
        </Numbers>
        <div value={value}>{tr !== undefined && <RoutesList tr={tr} />}</div>
      </SwipeableViews>
    </Container>
  );
};

const Container = styled.div``;
const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledButton = styled(Button)`
  width: 300px;
  margin: 5px;
`;

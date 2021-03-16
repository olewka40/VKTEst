import React, { useState } from "react";
import styled from "styled-components";
import { countryTransport } from "../../constants/config";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import SwipeableViews from "react-swipeable-views";
import { RoutesList } from "./RoutesList";
import { Search } from "@vkontakte/vkui";

export const Country = ({
  value,
  setValue,
  handleChangeIndex,
  setActiveModal,
  setModalInfo,
  setTransportType,
}) => {
  const [tr, setTr] = useState();
  const [search, setSearch] = useState();
  const [searchRes, setSearchRes] = useState(countryTransport);

  const onChangeSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
    const searcher = search;
    setSearchRes(
      countryTransport.filter(
        (e) =>
          e.name.toLowerCase().indexOf(searcher) > -1 ||
          e.stopsAb.toLowerCase().indexOf(searcher) > -1
      )
    );
  };
  const goToRoutes = (e) => {
    const curTr = countryTransport.filter((num) => num.name === e);
    setTr(curTr[0]);
    setValue(1);
  };

  return (
    <Container>
      <Search value={search} onChange={onChangeSearch} after={null} />

      <StyledSwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Numbers value={value}>
          {searchRes.map((e) => (
            <StyledButton onClick={() => goToRoutes(e.name)}>
              Маршрут №{e.name}
            </StyledButton>
          ))}
        </Numbers>
        <div value={value}>
          {tr !== undefined && (
            <RoutesList
              setActiveModal={setActiveModal}
              setTransportType={setTransportType}
              setModalInfo={setModalInfo}
              tr={tr}
            />
          )}
        </div>
      </StyledSwipeableViews>
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
export const StyledSwipeableViews = styled(SwipeableViews)`
  .react-swipeable-view-container {
    height: 100%;
  }
  .react-swipeable-view-container > div[aria-hidden="false"] {
    height: 100%;
  }
  .react-swipeable-view-container > div[aria-hidden="true"] {
    height: 100%;
  }
  height: 100%;
`;

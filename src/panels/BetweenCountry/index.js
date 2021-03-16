import React, { useState } from "react";
import styled from "styled-components";
import { transport } from "../../constants/config";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import SwipeableViews from "react-swipeable-views";
import { RoutesList } from "./RoutesList";
import { Search } from "@vkontakte/vkui";

export const BetweenCountry = ({
  handleChangeIndex,
  setActiveModal,
  setTransportType,
  setModalInfo,
}) => {
  const [tr, setTr] = useState();
  const [search, setSearch] = useState();
  const [searchRes, setSearchRes] = useState(transport);
  const [value, setValue] = useState(0);

  const onChangeSearch = (e) => {
    setSearchRes("");
    setSearch(e.target.value);
    const searcher = search;
    setSearchRes(
      transport.filter(
        (e) => e.nameA.indexOf(searcher) > -1 || e.nameB.indexOf(searcher) > -1
      )
    );
  };
  const goToRoutes = (nameA, nameB) => {
    const curTr = transport.filter(
      (num) => num.nameA === nameA || num.nameB === nameB
    );
    setTr(curTr[0]);
    setValue(1);
  };

  return (
    <Container>
      <Search value={search} onChange={onChangeSearch} after={null} />

      <StyledSwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <Numbers value={value}>
          {searchRes.map((e) => (
            <StyledButton onClick={() => goToRoutes(e.nameA, e.nameB)}>
              {e.nameA} - {e.nameB}
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
  height: 30px;
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

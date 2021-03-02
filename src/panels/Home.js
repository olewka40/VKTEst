import React, { useState } from "react";
import PropTypes from "prop-types";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import styled from "styled-components";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import { FixedLayout, Search } from "@vkontakte/vkui";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import { Country } from "./Country";
import { BrowserRouter as Router } from "react-router-dom";
import { Icon20HomeOutline } from "@vkontakte/icons";

const Home = ({ id, go, setActiveModal, setModalInfo }) => {
  const [activeTab, setActiveTab] = useState("country");

  const [value, setValue] = useState(0);

  const setTab = (active) => {
    setActiveTab(active);
    goHome();
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const goHome = () => {
    setValue(0);
  };

  return (
    <Router>
      <MainContainer>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={goHome}>
              <Icon20HomeOutline />
            </PanelHeaderButton>
          }
        >
          Мониторинг транспорта
        </PanelHeader>

        <>
          {activeTab === "country" && (
            <Country
              setActiveModal={setActiveModal}
              setModalInfo={setModalInfo}
              value={value}
              setValue={setValue}
              handleChangeIndex={handleChangeIndex}
            />
          )}
          {/*{activeTab === "betweenCountry" && <Country />}*/}
        </>
      </MainContainer>
      <FixedLayout vertical="bottom">
        <Tabs>
          <TabsItem
            selected={activeTab === "country"}
            onClick={() => {
              setTab("country");
            }}
          >
            Городской транспорт
          </TabsItem>
          <TabsItem
            selected={activeTab === "betweenCountry"}
            onClick={() => {
              setTab("betweenCountry");
            }}
          >
            Пригородный
          </TabsItem>
        </Tabs>
      </FixedLayout>
    </Router>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;

export const StyledButton = styled(Button)`
  .Button {
    margin-top: 10px;
  }
  margin: 5px 10px;
  box-sizing: content-box;
  width: 91.5%;
  .Button--ios {
    margin-top: 10px;
  }
`;
const MainContainer = styled.div``;

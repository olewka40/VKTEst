import React, { useState } from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import styled from "styled-components";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { FixedLayout, IOS, platform } from "@vkontakte/vkui";
import TabsItem from "@vkontakte/vkui/dist/components/TabsItem/TabsItem";
import Tabs from "@vkontakte/vkui/dist/components/Tabs/Tabs";
import { Country } from "./Country";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

const osName = platform();

const Home = ({ id, go }) => {
  const [activeTab, setActiveTab] = useState("country");

  return (
    <Router>
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={go} data-to="home">
              {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          Мониторинг транспорта
        </PanelHeader>

        <>
          {activeTab === "country" && <Country />}
          {activeTab === "betweenCountry" && <Country />}
        </>

        <FixedLayout vertical="bottom">
          <Tabs>
            <TabsItem
              selected={activeTab === "country"}
              onClick={() => setActiveTab("country")}
            >
              Городской транспорт
            </TabsItem>
            <TabsItem
              selected={activeTab === "betweenCountry"}
              onClick={() => setActiveTab("betweenCountry")}
            >
              Пригородный
            </TabsItem>
          </Tabs>
        </FixedLayout>
      </Panel>
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

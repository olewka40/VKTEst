import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";
import { transport } from "./constants/config";
import Home from "./panels/Home";
import { UserContext } from "./context/UserContext";
import {
  ANDROID,
  IOS,
  ModalCard,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderClose,
  platform,
} from "@vkontakte/vkui";
import styled from "styled-components";
import { Icon24Dismiss } from "@vkontakte/icons";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [activeModal, setActiveModal] = useState(null);
  const [modalInfo, setModalInfo] = useState("");
  const [transportType, setTransportType] = useState("");

  const modalClose = () => {
    setActiveModal(null);
    console.log(activeModal);
  };

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData().then((r) => r);
  }, [setUser, setPopout]);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  const modal = (
    <ModalRoot
      activeModal={activeModal}
      header={<ModalPageHeader />}
      onClose={modalClose}
    >
      <ModalPageHeader
        right={
          platform === IOS && (
            <PanelHeaderButton onClick={modalClose}>
              <Icon24Dismiss />
            </PanelHeaderButton>
          )
        }
        left={platform === ANDROID && <PanelHeaderClose onClick={modalClose} />}
      />
      <ModalCard id="transportRoute">
        {modalInfo !== "" && (
          <>
            {transportType === "routeTO" && (
              <RouteInfo>
                <b>Прямой маршрут</b>
                {modalInfo.stopsAb}
              </RouteInfo>
            )}
            {transportType === "routeOUT" && (
              <RouteInfo>
                <b>Обратный маршрут</b> {modalInfo.stopsbA}
              </RouteInfo>
            )}

            <br />
          </>
        )}
      </ModalCard>
    </ModalRoot>
  );

  return (
    <UserContext.Provider
      value={{
        fetchedUser,
        transport,
      }}
    >
      <View activePanel={activePanel} popout={popout} modal={modal}>
        <Home
          id="home"
          fetchedUser={fetchedUser}
          go={go}
          setActiveModal={setActiveModal}
          setModalInfo={setModalInfo}
          setTransportType={setTransportType}
        />
      </View>
    </UserContext.Provider>
  );
};

export default App;

const RouteInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

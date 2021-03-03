import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";
import { transport } from "./constants/config";
import Home from "./panels/Home";
import { UserContext } from "./context/UserContext";
import {
  ModalCard,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  PanelHeaderClose,
  PanelHeaderSubmit,
} from "@vkontakte/vkui";
import { Country } from "./panels/Country";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [activeModal, setActiveModal] = useState(null);
  const [modalInfo, setModalInfo] = useState("");
  const modalClose = () => {
    setActiveModal(null);
  };
  console.log(modalInfo);
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
    <ModalRoot activeModal={activeModal} onClose={modalClose}>
      <ModalCard id="transportRoute">
        {modalInfo !== "" && (
          <>
            <div>
              <b>Прямой маршрут</b>
              {modalInfo.stopsAb}
            </div>
            <br />
            <div>
              <b>Обратный маршрут</b> {modalInfo.stopsbA}
            </div>
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
        />
      </View>
    </UserContext.Provider>
  );
};

export default App;

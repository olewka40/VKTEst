import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";
import { transport } from "./constants/config";
import Home from "./panels/Home";
import { UserContext } from "./context/UserContext";
import { Country } from "./panels/Transport Variant/Country";
import { StopsList } from "./panels/Transport Variant/Routes/Stops/StopsList";
import { RoutesList } from "./panels/Transport Variant/Routes/RoutesList";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [route, setRoute] = useState("");
  const [stops, setStops] = useState("");
  const [transportVar, setTransportVar] = useState("");

  console.log(route, stops, transportVar);
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
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };
  console.log(transport);
  return (
    <UserContext.Provider
      value={{
        fetchedUser,
        transport,
        route,
        setRoute,
        stops,
        setStops,
        transportVar,
        setTransportVar,
      }}
    >
      <View activePanel={activePanel} popout={popout}>
        <Home
          id="home"
          fetchedUser={fetchedUser}
          transportVar={transportVar}
          go={go}
        />
        <Country id="Country" transportvar={transportVar} go={go} />
        <RoutesList id="RoutesList" route={route} go={go} />
        <StopsList id="StopsList" stops={stops} go={go} />
      </View>
    </UserContext.Provider>
  );
};

export default App;

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import { PanelHeader } from "@vkontakte/vkui";
import React, { useContext } from "react";

import { IOS, platform } from "@vkontakte/vkui";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { transport } from "../constants/config";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import { UserContext } from "../context/UserContext";

const osName = platform();

export const RoutesList = ({ id, go }) => {
  const { setRoute } = useContext(UserContext);
  const toRoutes = () => {
    setRoute();
    go();
  };
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Выберите маршрут междугороднего транспорта
      </PanelHeader>

      {transport[1].variants.map((el) => (
        <Button
          onClick={() => {
            toRoutes(el.id);
          }}
        >
          {el.name}
        </Button>
      ))}
    </Panel>
  );
};

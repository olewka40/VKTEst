import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import React from "react";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import { IOS, platform } from "@vkontakte/vkui";
import { transport } from "../constants/config";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const osName = platform();

export const Country = ({ id, go }) => {
  const toRoutes = () => {};

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        {" "}
        Выберите маршрут городского транспорта
      </PanelHeader>

      {transport[1].variants.map((el) => (
        <Button onClick={toRoutes}>{el.name}</Button>
      ))}
    </Panel>
  );
};

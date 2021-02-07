import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import { PanelHeader } from "@vkontakte/vkui";
import React from "react";

import { IOS, platform } from "@vkontakte/vkui";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

const osName = platform();

export const StopsList = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Маршрут выбранного рейса
      </PanelHeader>
      123123123123
    </Panel>
  );
};

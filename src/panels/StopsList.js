import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import { PanelHeader } from "@vkontakte/vkui";
import React from "react";

import { IOS, platform } from "@vkontakte/vkui";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { transport } from "../constants/config";
import Button from "@vkontakte/vkui/dist/components/Button/Button";

const osName = platform();

export const StopsList = ({ id, go }) => {
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
                Выберите маршрут междугороднего транспорта
            </PanelHeader>


        </Panel>
    );
};

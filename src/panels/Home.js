import React, { useContext } from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import { UserContext } from "../context/UserContext";
import styled from "styled-components";
import PanelHeaderButton from "@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import { IOS, platform } from "@vkontakte/vkui";
import { transport } from "../constants/config";

const osName = platform();

const Home = ({ id, go }) => {
  const { fetchedUser } = useContext(UserContext);

  return (
    <Panel id={id}>
      <PanelHeader
        left={
          <PanelHeaderButton onClick={go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </PanelHeaderButton>
        }
      >
        Добро пожаловать в сервис мониторинга транспорта калуги
      </PanelHeader>
      {fetchedUser && (
        <Group title="User Data Fetched with VK Bridge">
          <Cell
            before={
              fetchedUser.photo_200 ? (
                <Avatar src={fetchedUser.photo_200} />
              ) : null
            }
            description={
              fetchedUser.city && fetchedUser.city.title
                ? fetchedUser.city.title
                : ""
            }
          >
            {`${fetchedUser.first_name} ${fetchedUser.last_name} `}
          </Cell>
        </Group>
      )}
      <Group title="Navigation Example">
        {transport.map((variant) => (
          <StyledButton
            size="xl"
            level="2"
            onClick={go}
            data-to={variant.enName}
          >
            {variant.name}
          </StyledButton>
        ))}
      </Group>
    </Panel>
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

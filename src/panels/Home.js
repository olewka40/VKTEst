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

const Home = ({ id, go }) => {
  const { fetchedUser, setMoney, money } = useContext(UserContext);
  const takeMoney = () => {
    setMoney(money + 1);
  };
  return (
    <Panel id={id}>
      <PanelHeader>Добро пожаловать</PanelHeader>
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
      <Cell>Баланс: {money}</Cell>
      <Group title="Navigation Example">
        <StyledButton size="xl" level="2" onClick={go} data-to="shop">
          В магазин
        </StyledButton>
        <StyledButton size="xl" level="2" onClick={takeMoney}>
          Фарм
        </StyledButton>
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
  .Button--ios {
    margin-top: 10px;
  }
`;
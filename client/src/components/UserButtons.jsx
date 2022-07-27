import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { closeSidebar, logout, selectUserState } from "../store/userSlice";
import { Create } from "@material-ui/icons";
import { BiLogIn, BiLogOut, BiUserPlus } from "react-icons/bi";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  .selected {
    background: var(--clr-primary-2);
    transition: all 1s ease;
  }
`;

const Li = styled.li`
  list-style: none;
  cursor: pointer;
  color: var(--text-color);
`;

const MenuItemContainer = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 1s ease;
    background: var(--clr-primary-2);
  }
`;

const UserButtons = () => {
  const { userInfo } = useSelector(selectUserState);
  const dispatch = useDispatch();

  return (
    <>
      {userInfo ? (
        <Ul>
          <NavLink exact to="/write" activeClassName="selected">
            <MenuItemContainer onClick={() => dispatch(closeSidebar())}>
              <Create />
              <Li>Write</Li>
            </MenuItemContainer>
          </NavLink>
          <MenuItemContainer
            onClick={() => {
              dispatch(logout());
              dispatch(closeSidebar());
            }}
            style={{ cursor: "pointer", padding: "0  10px" }}
          >
            <BiLogOut />
            <Li>Logout</Li>
          </MenuItemContainer>
        </Ul>
      ) : (
        <Ul>
          <NavLink exact to="/register" activeClassName="selected">
            <MenuItemContainer onClick={() => dispatch(closeSidebar())}>
              <BiUserPlus />
              <Li>Register</Li>
            </MenuItemContainer>
          </NavLink>
          <NavLink exact to="/login" activeClassName="selected">
            <MenuItemContainer onClick={() => dispatch(closeSidebar())}>
              <BiLogIn />
              <Li>Login</Li>
            </MenuItemContainer>
          </NavLink>
        </Ul>
      )}
    </>
  );
};

export default UserButtons;

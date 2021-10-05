import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BiLogIn, BiLogOut, BiUserPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUserState } from "../store/userSlice";
import { Create } from "@material-ui/icons";

const NavContainer = styled.nav`
  height: 50px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  background-color: var(--clr-primary-1);
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  position: sticky;
  top: 0px;
  z-index: 999;
`;

const Left = styled.div`
  flex: 1;
  border-right: 1px solid var(--text-color);
`;

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

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: right;
  border-left: 1px solid var(--text-color);
`;

const SearchContainer = styled.div`
  flex: 1;
  padding: 0 10px;
  align-items: center;
  text-align: center;

  input {
    font-size: 14px;
    border: none;
    background-color: var(--clr-background);
    padding: 8px;
    border-radius: 20px;
  }

  input:focus {
    outline: none !important;
    border: 2px solid var(--clr-primary-2);
  }
`;

const LoginContainer = styled.div`
  flex: 1;
  border-left: 1px solid var(--text-color);
  max-width: 280px;
  padding-right: 10px;

  svg {
    color: var(--text-color);
    font-size: 24px;
    margin-right: 5px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    margin: 0;
  }
`;

const Navbar = () => {
  const { userInfo } = useSelector(selectUserState);
  const dispatch = useDispatch();

  const profilePic =
    userInfo?.info?.profilePic ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <NavContainer>
      <Left>
        <Ul>
          <NavLink exact to="/" activeClassName="selected">
            <MenuItemContainer>
              <Li>Home</Li>
            </MenuItemContainer>
          </NavLink>
          <NavLink exact to="/posts" activeClassName="selected">
            <MenuItemContainer>
              <Li>Posts</Li>
            </MenuItemContainer>
          </NavLink>
          <NavLink exact to="/about" activeClassName="selected">
            <MenuItemContainer>
              <Li>About</Li>
            </MenuItemContainer>
          </NavLink>
          <NavLink exact to="/contact" activeClassName="selected">
            <MenuItemContainer>
              <Li>Contact</Li>
            </MenuItemContainer>
          </NavLink>
        </Ul>
      </Left>
      <Center>Electronics Blog</Center>
      <Right>
        <SearchContainer>
          <input type="text" placeholder="Search..." />
        </SearchContainer>
        <LoginContainer>
          {userInfo ? (
            <>
              <Ul>
                <NavLink exact to="/write" activeClassName="selected">
                  <MenuItemContainer>
                    <Create />
                    <Li>Write</Li>
                  </MenuItemContainer>
                </NavLink>
                <MenuItemContainer
                  onClick={() => dispatch(logout())}
                  style={{ cursor: "pointer", padding: "0  10px" }}
                >
                  <BiLogOut />
                  <Li>Logout</Li>
                </MenuItemContainer>
              </Ul>
            </>
          ) : (
            <Ul>
              <NavLink exact to="/register" activeClassName="selected">
                <MenuItemContainer>
                  <BiUserPlus />
                  <Li>Register</Li>
                </MenuItemContainer>
              </NavLink>
              <NavLink exact to="/login" activeClassName="selected">
                <MenuItemContainer>
                  <BiLogIn />
                  <Li>Login</Li>
                </MenuItemContainer>
              </NavLink>
            </Ul>
          )}
        </LoginContainer>
      </Right>
    </NavContainer>
  );
};

export default Navbar;

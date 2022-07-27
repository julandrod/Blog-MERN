import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { openSidebar } from "../store/userSlice";
import UserButtons from "./UserButtons";

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
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex: 1;
    border-right: 1px solid var(--text-color);
  }
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  @media (min-width: 992px) {
    justify-content: center;
  }
`;

const Right = styled.div`
  display: none;
  @media (min-width: 992px) {
    flex: 1;
    display: flex;
    align-items: center;
    text-align: right;
    border-left: 1px solid var(--text-color);
  }
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

const NavToggle = styled.button`
  background: transparent;
  border: transparent;
  color: var(--text-color);
  cursor: pointer;
  svg {
    font-size: 24px;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

const Navbar = () => {
  const dispatch = useDispatch();

  // const profilePic =
  //   userInfo?.info?.profilePic ||
  //   "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

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
      <Center>
        Electronics Blog
        <NavToggle onClick={() => dispatch(openSidebar())}>
          <FaBars />
        </NavToggle>
      </Center>
      <Right>
        <SearchContainer>
          <input type="text" placeholder="Search..." />
        </SearchContainer>
        <LoginContainer>
          <UserButtons />
        </LoginContainer>
      </Right>
    </NavContainer>
  );
};

export default Navbar;

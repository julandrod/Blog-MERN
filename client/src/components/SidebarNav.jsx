import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeSidebar, selectUserState } from "../store/userSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserButtons from "./UserButtons";

const Container = styled.div`
  text-align: center;
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;

  height: 50px;
  background-color: var(--clr-primary-1);
  font-size: 16px;
  font-weight: 500;

  h3 {
    color: var(--text-color);
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border-color: transparent;
  color: var(--text-color);
  transition: var(--transition);
  cursor: pointer;
  margin-top: 0.2rem;
  svg {
    font-size: 24px;
  }
  &:hover {
    color: var(--clr-background-2);
  }
`;

const Links = styled.ul`
  margin-bottom: 2rem;
  a {
    display: block;
    text-align: center;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    transition: var(--transition);
    &:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
      background: var(--clr-background);
    }
  }
`;

const ButtonsContainer = styled.div`
  li {
    color: var(--clr-primary-1);
  }
`;

const SidebarNav = () => {
  const { isSidebarOpen } = useSelector(selectUserState);
  const dispatch = useDispatch();

  return (
    <Container>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <Header>
          <h3>Electronics Blog</h3>
          <CloseBtn onClick={() => dispatch(closeSidebar())}>
            <FaTimes />
          </CloseBtn>
        </Header>
        <Links>
          <Link to="/" onClick={() => dispatch(closeSidebar())}>
            <li>Home</li>
          </Link>
          <Link to="/posts" onClick={() => dispatch(closeSidebar())}>
            <li>Posts</li>
          </Link>
          <Link to="/about" onClick={() => dispatch(closeSidebar())}>
            <li>About</li>
          </Link>
          <Link to="/contact" onClick={() => dispatch(closeSidebar())}>
            <li>Contact</li>
          </Link>
        </Links>
        <ButtonsContainer>
          <UserButtons />
        </ButtonsContainer>
      </aside>
    </Container>
  );
};

export default SidebarNav;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ErrorPage, LoadingPage } from ".";
import { Featured, Sidebar } from "../components";
import { getPostsApi, selectPostsState } from "../store/postsSlice";

const HomeContainer = styled.main`
  display: flex;
  background-color: var(--clr-background);
`;

const HomePage = () => {
  const dispatch = useDispatch();
  const { postsLoading, postsError } = useSelector(selectPostsState);

  useEffect(() => {
    dispatch(getPostsApi());
  }, [dispatch]);

  if (postsLoading) return <LoadingPage />;

  if (postsError) return <ErrorPage />;

  return (
    <HomeContainer>
      <Featured />
      <Sidebar />
    </HomeContainer>
  );
};

export default HomePage;

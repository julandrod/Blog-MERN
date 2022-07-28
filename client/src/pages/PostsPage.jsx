import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ErrorPage, LoadingPage } from ".";
import { Sidebar } from "../components";
import { getPostsApi, selectPostsState } from "../store/postsSlice";
import { useLocation } from "react-router";

const Wrapper = styled.section`
  display: flex;
  background-color: var(--clr-background);
`;

const PostsContainer = styled.div`
  display: flex;
  flex: 9;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  padding: 20px 10px;
  @media (min-width: 768px) {
    padding: 40px 60px;
  }
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: max-content;
  padding: 20px;
  margin: 5px;

  img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  a {
    color: black;
  }

  p {
    font-size: 15px;
    font-weight: 300;
    text-align: justify;
  }

  &:hover {
    background-color: var(--clr-background-2);
    border-radius: 10px;
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 45%;
  }
`;

const PostsPage = () => {
  const { postsInfo, postsLoading, postsError } = useSelector(selectPostsState);
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    dispatch(getPostsApi({ search }));
  }, [dispatch, search]);

  if (postsLoading) return <LoadingPage />;

  if (postsError) return <ErrorPage />;

  return (
    <Wrapper>
      <PostsContainer>
        {postsInfo?.map((post) => (
          <PostCard key={post._id}>
            <Link to={`/posts/${post?._id}`}>
              <img src={post?.photo} alt="" />
              <h2>{post?.title}</h2>
              <p>{post?.desc?.substring(0, 150)}...</p>
            </Link>
          </PostCard>
        ))}
      </PostsContainer>
      <Sidebar />
    </Wrapper>
  );
};
export default PostsPage;

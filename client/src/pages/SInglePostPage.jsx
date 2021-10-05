import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { ErrorPage, LoadingPage } from ".";
import { Sidebar } from "../components";
import { getSinglePostApi, selectPostsState } from "../store/postsSlice";
import {
  BreakLine,
  Categories,
  Description,
  PostContainer,
  PostImage,
  PostInfo,
  TitlePost,
} from "../styles/Post.styles";

const Wrapper = styled.section`
  display: flex;
  background-color: var(--clr-background);
`;

const SInglePostPage = () => {
  const { id } = useParams();

  const { postsLoading, postsError, singlePost } =
    useSelector(selectPostsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePostApi(id));
  }, [id, dispatch]);

  if (postsLoading) return <LoadingPage />;

  if (postsError) return <ErrorPage />;

  return (
    <Wrapper>
      <PostContainer>
        <TitlePost>{singlePost?.title}</TitlePost>
        <BreakLine />
        <PostInfo>
          <span>By: {singlePost?.username}</span>
          <Categories>
            <span>/ Categories: </span>
            <ul>
              {singlePost?.categories.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Categories>
        </PostInfo>
        <PostImage src={singlePost?.photo} />
        <Description>{singlePost?.desc}</Description>
        <BreakLine />
      </PostContainer>
      <Sidebar />
    </Wrapper>
  );
};

export default SInglePostPage;

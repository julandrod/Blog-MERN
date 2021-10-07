import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { ErrorPage, LoadingPage } from ".";
import { Sidebar } from "../components";
import {
  deletePostApi,
  getSinglePostApi,
  selectPostsState,
} from "../store/postsSlice";
import { Link } from "react-router-dom";
import {
  BreakLine,
  Categories,
  Description,
  PostContainer,
  PostImage,
  PostInfo,
  TitlePost,
} from "../styles/Post.styles";
import { selectUserState } from "../store/userSlice";

const Wrapper = styled.section`
  display: flex;
  background-color: var(--clr-background);
`;

const UserButtons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin: 20px 0;
  width: 100px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  border-radius: 50px;
  background-color: ${({ color }) => color};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  color: var(--text-color);
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const SInglePostPage = () => {
  const { id } = useParams();
  const { postsLoading, postsError, singlePost } =
    useSelector(selectPostsState);
  const { userInfo } = useSelector(selectUserState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getSinglePostApi(id));
  }, [id, dispatch]);

  if (postsLoading) return <LoadingPage />;

  if (postsError) return <ErrorPage />;

  const handleDelete = () => {
    dispatch(deletePostApi({ id, token: userInfo.token }));
    history.push(`/posts?user=${singlePost?.username}`);
  };

  const handleUpdate = () => {
    history.push({
      pathname: "/write",
      state: { id, singlePost },
    });
  };

  return (
    <Wrapper>
      <PostContainer>
        <TitlePost>{singlePost?.title}</TitlePost>
        <BreakLine />
        <PostInfo>
          <span>
            By:{" "}
            <Link to={`/posts?user=${singlePost?.username}`}>
              {singlePost?.username}
            </Link>
          </span>
          <Categories>
            <span>/ Categories: </span>
            <ul>
              {singlePost?.categories.map((item, idx) => (
                <Link to={`/posts?cat=${item}`} key={idx}>
                  <li>{item}</li>
                </Link>
              ))}
            </ul>
          </Categories>
        </PostInfo>
        {userInfo?.info._id === singlePost?.userId && (
          <UserButtons>
            <Button color="orange" onClick={handleUpdate}>
              Edit
            </Button>
            <Button color="red" onClick={handleDelete}>
              Delete
            </Button>
          </UserButtons>
        )}
        <PostImage src={singlePost?.photo} />
        <Description>{singlePost?.desc}</Description>
        <BreakLine />
      </PostContainer>
      <Sidebar />
    </Wrapper>
  );
};

export default SInglePostPage;

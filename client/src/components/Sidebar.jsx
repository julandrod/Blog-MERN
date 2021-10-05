import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectPostsState } from "../store/postsSlice";
import { selectUserState } from "../store/userSlice";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  margin: 30px 30px 30px 10px;
  border-radius: 30px;
  border-left: 1px solid var(--clr-primary-1);
  border-right: 1px solid var(--clr-primary-1);

  border-bottom: 1px solid var(--clr-primary-1);
`;

const SidebarTitleContainer = styled.div`
  background-color: var(--clr-primary-1);
  color: var(--text-color);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const SidebarTitle = styled.h3`
  /* text-align: center; */
`;

const UserInfoContainer = styled.div`
  /* text-align: center; */
  /* color:  */
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const RecentPostsContainer = styled.div`
  padding: 20px 10px 5px;

  h2 {
    font-weight: 400;
  }

  a {
    color: black;
  }

  a:hover {
    color: var(--clr-primary-2);
  }
`;

const BreakLine = styled.hr`
  border: 1px solid #${({ color }) => color};
  margin-bottom: 20px;
  width: ${({ width }) => width}%;
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  margin-bottom: 20px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    margin-right: 10px;
  }
`;

const Sidebar = () => {
  const { userInfo } = useSelector(selectUserState);
  const username = userInfo?.info?.username || "Guest";
  const profilePic =
    userInfo?.info?.profilePic ||
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  const { postsInfo, postsLoading, postsError } = useSelector(selectPostsState);

  if (postsLoading) return "Loading...";

  if (postsError) return "Error!";

  return (
    <SidebarContainer>
      <SidebarTitleContainer>
        <SidebarTitle>You are visiting the site as:</SidebarTitle>
        <UserInfoContainer>
          <Link to="/settings">
            <img src={profilePic} alt="" />
          </Link>
          <span>{username}</span>
        </UserInfoContainer>
      </SidebarTitleContainer>
      <RecentPostsContainer>
        <h2>Recent Posts</h2>
        <BreakLine color="17696d" width="50" />
        {postsInfo?.slice(0, 8).map((post) => (
          <>
            <Link to={`/posts/${post?._id}`}>
              <PostContainer>
                <img src={post?.photo} alt="" />
                <span>{post?.title}</span>
              </PostContainer>
            </Link>
            <BreakLine color="lightgrey" width="90" />
          </>
        ))}
      </RecentPostsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

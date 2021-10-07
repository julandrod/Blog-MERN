import { useSelector } from "react-redux";
import { ErrorPage, LoadingPage } from "../pages";
import { selectPostsState } from "../store/postsSlice";
import {
  BreakLine,
  Categories,
  Description,
  PostContainer,
  PostImage,
  PostInfo,
  TitlePost,
} from "../styles/Post.styles";

const Featured = () => {
  const { featuredPosts, postsLoading, postsError } =
    useSelector(selectPostsState);
  const post = featuredPosts[0];

  if (postsLoading) return <LoadingPage />;

  if (postsError) return <ErrorPage />;

  return (
    <PostContainer>
      <TitlePost>{post?.title}</TitlePost>
      <BreakLine />
      <PostInfo>
        <span>By: {post?.username}</span>
        <Categories>
          <span>/ Categories: </span>
          <ul>
            {post?.categories?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Categories>
      </PostInfo>
      <PostImage src={post?.photo} />
      <Description>{post?.desc}</Description>
      <BreakLine />
    </PostContainer>
  );
};

export default Featured;

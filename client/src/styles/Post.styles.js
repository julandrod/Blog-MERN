import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex: 9;
  flex-direction: column;
  padding: 20px 20px;

  @media (min-width: 768px) {
    padding: 40px 60px;
  }
`;

export const TitlePost = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Categories = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 5px;
  }

  ul {
    display: flex;
    margin: 5px 0;
  }

  li {
    list-style: none;
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const PostImage = styled.img`
  margin-top: 20px;
  width: 100%;
  height: 400px;
  object-fit: contain;
`;

export const Description = styled.p`
  font-size: 15px;
  margin: 20px 0px;
  text-align: justify;
  line-height: 30px;
  text-overflow: ellipsis;
`;

export const BreakLine = styled.hr`
  border: 1px solid var(--clr-primary-2);
  margin-top: 10px;
`;

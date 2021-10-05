import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 40px 60px;
`;
const Loading = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: var(--clr-primary-2);
  animation: spinner 0.6s linear infinite;
`;

const LoadingPage = () => {
  return (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  );
};

export default LoadingPage;

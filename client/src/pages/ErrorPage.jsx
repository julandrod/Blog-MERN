import React from "react";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  padding: 40px 60px;
  flex-direction: column;

  h1 {
    padding: 20px;
  }

  h2 {
    padding: 20px;
  }

  button {
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    width: 200px;
    padding: 10px;
    border-radius: 50px;
    background-color: var(--clr-primary-2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    color: var(--text-color);
    border: none;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <h1>Something went wrong.</h1>
      <h2>Try refreshing the page.</h2>
      <button onClick={() => window.location.reload(false)}>
        Click to reload!
      </button>
    </ErrorPageContainer>
  );
};

export default ErrorPage;

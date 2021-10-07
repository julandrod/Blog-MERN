import React, { useState } from "react";
import styled from "styled-components";
import { SignForm } from "../components/";
import { useDispatch } from "react-redux";
import { getUserInfoLogin } from "../store/userSlice";
import { Link } from "react-router-dom";

const Span = styled.span`
  margin-top: 15px;
`;

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch(
      getUserInfoLogin({ email: userInfo.email, password: userInfo.password })
    );
  };

  return (
    <SignForm
      title="Login"
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      handle={handleLogin}
      login={true}
    >
      <Span>
        Don’t have an account yet? <Link to="/register">Create one.</Link>
      </Span>
    </SignForm>
  );
};

export default LoginPage;

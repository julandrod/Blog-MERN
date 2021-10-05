import React, { useState } from "react";
import styled from "styled-components";
import { SignForm } from "../components/";
import { useDispatch } from "react-redux";
import { getUserInfoLogin } from "../store/userSlice";

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

    //   try {
    //     const response = await axios.post("/auth/login", {
    //       email: userInfo.email,
    //       password: userInfo.password,
    //     });
    //     console.log(response.data);
    //     dispatch(login(response.data))
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
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
        Don’t have an account yet? <a href="">Create one.</a>
      </Span>
    </SignForm>
  );
};

export default LoginPage;

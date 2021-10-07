import React, { useState } from "react";
import axios from "axios";
import { SignForm } from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Span = styled.span`
  margin-top: 15px;
`;

const RegisterPage = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, error: false });

    try {
      const response = await axios.post("/auth/register", {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      });
      console.log(response.data);
    } catch (error) {
      setUserInfo({ ...userInfo, error: true });
    }
  };

  return (
    <SignForm
      title="Register"
      userInfo={userInfo}
      setUserInfo={setUserInfo}
      handle={handleSubmit}
      login={false}
    >
      <Span>
        Already have an account?  <Link to="/login">Login here.</Link>
      </Span>
    </SignForm>
  );
};

export default RegisterPage;

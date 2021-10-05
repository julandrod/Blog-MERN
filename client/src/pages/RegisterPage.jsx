import React, { useState } from "react";
import axios from "axios";
import { SignForm } from "../components";

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
    ></SignForm>
  );
};

export default RegisterPage;

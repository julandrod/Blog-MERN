import React from "react";
import styled from "styled-components";
import { Button, ButtonContainer } from "../styles/Button.styles";

const ContactContainer = styled.section`
  display: flex;
  background-color: var(--clr-background);
  align-items: center;
  justify-content: center;
  /* width: 100vw; */
`;

const FormContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  background-color: white;
  margin: 30px 0;
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px; */
  border-radius: 30px;
`;

const TitleContact = styled.h1`
  font-size: 28px;
  color: var(--text-color);
  background-color: var(--clr-primary-1);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 15px;
  text-align: center;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-left: 1px solid var(--clr-primary-1);
  border-right: 1px solid var(--clr-primary-1);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 50%;
`;

const LabelInput = styled.label`
  font-size: 16px;
  margin: 10px 10px;
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  background-color: var(--clr-background);
  padding: 10px;
  border-radius: 20px;

  &:focus {
    outline: none !important;
    border: 1px solid var(--clr-primary-2);
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 100%;
  border-left: 1px solid var(--clr-primary-1);
  border-right: 1px solid var(--clr-primary-1);
`;

const TextMessage = styled.textarea`
  font-size: 16px;
  border: none;
  background-color: var(--clr-background);
  padding: 10px;
  border-radius: 20px;

  &:focus {
    outline: none !important;
    border: 1px solid var(--clr-primary-2);
  }
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <FormContactContainer>
        <TitleContact>Contact Us</TitleContact>
        <UserInfoContainer>
          <InputContainer>
            <LabelInput>Name:</LabelInput>
            <Input type="text" placeholder="Enter your name" />
          </InputContainer>
          <InputContainer>
            <LabelInput>Email:</LabelInput>
            <Input type="text" placeholder="Enter your email" />
          </InputContainer>
        </UserInfoContainer>
        <MessageContainer>
          <LabelInput>Subject:</LabelInput>
          <Input type="text" placeholder="Subject" />
          <LabelInput style={{ marginTop: "20px" }}>Message</LabelInput>
          <TextMessage
            rows="5"
            cols="50"
            placeholder="Enter your message"
          ></TextMessage>
        </MessageContainer>
        <ButtonContainer width="100%" decoration>
          <Button type="button" width="200px">
            Submit
          </Button>
        </ButtonContainer>
      </FormContactContainer>
    </ContactContainer>
  );
};

export default ContactPage;

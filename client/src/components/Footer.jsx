import {
  Facebook,
  GitHub,
  Instagram,
  MailOutline,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  /* width: 100vw; */
  flex-grow: 1;
  overflow: hidden;
  background-color: var(--clr-primary-1);
  color: var(--text-color);
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
`;

const FooterTitle = styled.h1`
  margin: 10px 0 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const Left = styled.div`
  flex: 1.5;
  padding: 20px;
  text-align: justify;
  border-top: 1px solid var(--text-color);
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  border-right: 1px solid var(--text-color);
  border-left: 1px solid var(--text-color);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FooterInput = styled.input`
  flex: 2;
  border: none;
  border-radius: 50px;
  padding: 10px;
  margin: 1rem auto;

  @media (min-width: 768px) {
    margin-right: 10px;
  }
`;

const InputButton = styled.button`
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  padding: 10px;
  border-radius: 50px;
  background-color: var(--clr-primary-2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  color: var(--text-color);
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  border-top: 1px solid var(--text-color);
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--text-color);
  background-color: #${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--clr-primary-2);
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid var(--text-color);
  padding: 30px;
  text-align: center;

  a {
    color: var(--text-color);
  }

  a:hover {
    color: var(--clr-primary-2);
  }

  span {
    color: var(--text-color);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <Left>
          <FooterTitle>Electronics Blog</FooterTitle>
          <p>
            In this blog you can find news, tutorials, and much more about
            electronics, embedded systems. All from Arduino to Raspberry Pi.
          </p>
        </Left>
        <InfoContainer>
          <Center>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactItem>
              <Phone />
              +1 234 5678
            </ContactItem>
            <ContactItem>
              <MailOutline />
              contact@electronicsblog.com
            </ContactItem>
            <FooterTitle>Newsletter</FooterTitle>
            <InputContainer>
              <FooterInput
                type="text"
                placeholder="Enter your email to sign up"
              />
              <InputButton>Subscribe</InputButton>
            </InputContainer>
          </Center>
          <Right>
            <FooterTitle>Follow Us</FooterTitle>
            <SocialContainer>
              <SocialIcon color="3B5999">
                <Facebook />
              </SocialIcon>
              <SocialIcon color="E4405F">
                <Instagram />
              </SocialIcon>
              <SocialIcon color="55ACEE">
                <Twitter />
              </SocialIcon>
              <SocialIcon color="000000">
                <GitHub />
              </SocialIcon>
            </SocialContainer>
          </Right>
        </InfoContainer>
      </TopSection>
      <BottomSection>
        <span>
          &copy; 2021{" "}
          <a
            href="https://github.com/julandrod"
            target="_blank"
            rel="noreferrer"
          >
            Julandrod
          </a>
          . All rights reserved
        </span>
      </BottomSection>
    </FooterContainer>
  );
};

export default Footer;

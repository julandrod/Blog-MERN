import styled from "styled-components";
import { ArrowBackOutlined } from "@material-ui/icons";

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--clr-background);
  display: flex;
  align-items: center;
`;

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 5;
`;

const BackContainer = styled.div`
  display: flex;
  position: absolute;
  top: 80px;
  left: 50px;

  svg {
    font-size: 2.5rem;
    color: var(--clr-primary-1);
    cursor: pointer;
  }
`;

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 500px;
  height: 500px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 50px;
`;

const Title = styled.span`
  font-size: 30px;
  margin-bottom: 30px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const InputLabel = styled.label`
  margin: 10px 0;
`;

const InputForm = styled.input`
  border: none;
  background-color: var(--clr-background);
  padding: 10px 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormButton = styled.button`
  margin-top: 20px;
  width: 80%;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  border-radius: 50px;
  background-color: var(--clr-primary-1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  color: var(--text-color);
  border: none;
  cursor: pointer;
  opacity: ${({ buttonHidde }) => (buttonHidde ? 0.5 : 1)};

  &:hover {
    opacity: ${({ buttonHidde }) => (buttonHidde ? 0.5 : 0.9)};
    transform: scale(${({ buttonHidde }) => (buttonHidde ? 1 : 0.98)});
  }
`;

const SidebarImg = styled.img`
  justify-content: flex-end;
  width: 30%;
  height: 100%;
  object-fit: cover;
`;

const SignForm = ({
  title,
  userInfo,
  setUserInfo,
  handle,
  login,
  children,
}) => {
  let buttonHidde;

  if (login) {
    buttonHidde = userInfo.email.length === 0 || userInfo.password.length === 0;
  } else {
    buttonHidde =
      userInfo.username.length === 0 ||
      userInfo.email.length === 0 ||
      userInfo.password.length === 0;
  }

  return (
    <Container>
      <RegisterContainer>
        <BackContainer>
          <ArrowBackOutlined />
        </BackContainer>
        <WrapperForm>
          <Title>{title}</Title>
          <FormContainer onSubmit={handle}>
            {!login && (
              <>
                <InputLabel>Username</InputLabel>
                <InputForm
                  type="text"
                  placeholder="Username..."
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, username: e.target.value })
                  }
                  value={userInfo.username}
                  required
                />{" "}
              </>
            )}
            <InputLabel>Email</InputLabel>
            <InputForm
              type="email"
              placeholder="Email..."
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              value={userInfo.email}
              required
            />
            <InputLabel>Password</InputLabel>
            <InputForm
              type="password"
              placeholder="Password..."
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
              value={userInfo.password}
              required
            />
            {children}
            <ButtonContainer>
              <FormButton
                type="submit"
                disabled={buttonHidde}
                buttonHidde={buttonHidde}
              >
                {login ? "Login" : "Register"}
              </FormButton>
            </ButtonContainer>
          </FormContainer>
        </WrapperForm>
      </RegisterContainer>
      <SidebarImg
        src="https://static.login.arduino.cc/login/static/media/background.36cfe49e.jpg"
        alt=""
      />
    </Container>
  );
};

export default SignForm;

import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  width: ${({ width }) => width};
  border-left: ${({ decoration }) =>
    decoration ? "1px solid var(--clr-primary-1)" : "none"};
  border-right: ${({ decoration }) =>
    decoration ? "1px solid var(--clr-primary-1)" : "none"};
  border-bottom: ${({ decoration }) =>
    decoration ? "1px solid var(--clr-primary-1)" : "none"};
  border-bottom-left-radius: ${({ decoration }) =>
    decoration ? "30px" : "none"};
  border-bottom-right-radius: ${({ decoration }) =>
    decoration ? "30px" : "none"};
`;

export const Button = styled.button`
  margin: 20px 0;
  width: ${({ width }) => width};
  font-size: 16px;
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
    transform: scale(0.98);
  }
`;

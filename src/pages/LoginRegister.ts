import styled from "styled-components";
import { colors } from "../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.contentBg};
  border-radius: 15px;
  max-width: 250px;
  padding: 25px;
  color: ${colors.lightgray};
  border: 1px solid ${colors.borderBg};
  box-shadow: 3px 3px 3px ${colors.black};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const InputField = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid gray;
  outline: none;
  background-color: #503963;
  border-color: ${colors.button};
  box-shadow: 2px 2px 2px #000;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.button};
  width: 100px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 2px solid #503963;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px #000;
  &:hover {
    transition: 1s;
    background-color: #2e2e2e;
    border: 2px solid #2e2e2e;
    box-shadow: 2px 2px 2px #21162b;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  position: fixed;
  top: 20px;
  left: 0px;
  padding: 10px;
  border-radius: 0px 10px 15px 0px;
  background-color: red;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  box-shadow: 0 0 10px #ad4b4b;
  animation: errorAnimation 0.5s ease-in-out 0s 3;
  
  @keyframes errorAnimation {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(-10px);
    }
    40% {
      transform: translateY(0);
    }
    60% {
      transform: translateY(-5px);
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-2px);
    }
  }
`;


import styled from "styled-components";
import { colors } from "../styles/GlobalStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.primary};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #141414;
  border-radius: 15px;
  max-width: 250px;
  padding: 25px;
  color: #454545;
  border: 1px solid #4a2b64;
  box-shadow: 3px 3px 3px #000;
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

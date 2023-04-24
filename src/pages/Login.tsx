import React, { useState } from "react";
import * as S from "./LoginRegister";
import Logo from "../components/Img/Logo";
import axios, { AxiosError } from "axios";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        email,
        password,
      });
      const { access_token } = response.data;
      localStorage.setItem("token", access_token); // armazenando o token no localStorage
      // redirecionando o usuário para outra página após o login
      window.location.href = "/home";
    } catch (error: AxiosError | any) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Erro ao tentar fazer login. Tente novamente.");
      }
    }
  };

  return (
    <S.Container>
      <S.Card>
        <Logo alt="My Logo" />
        <S.Title>Login</S.Title>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Form onSubmit={handleSubmit}>
          <S.InputField>
            <S.Label htmlFor="email">Email:</S.Label>
            <S.Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </S.InputField>
          <S.InputField>
            <S.Label htmlFor="password">Password:</S.Label>
            <S.Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </S.InputField>
          <S.Button type="submit">Login</S.Button>
        </S.Form>
        <a href="/registro">
          <S.Button>Register</S.Button>
        </a>
      </S.Card>
    </S.Container>
  );
};

const Login = () => {
  return (
    <div>
      <S.Container>
        <LoginForm />
      </S.Container>
    </div>
  );
};

export default Login;

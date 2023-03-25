import React, { useState } from "react";
import * as S from "./LoginRegister";
import Logo from "../components/Img/Logo";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos!");
      return;
    }
    try {
      const response = await fetch("url_do_servidor/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        setErrorMessage("As credenciais de login estão incorretas!");
        return;
      }
      // Se o login for bem-sucedido, redirecione o usuário para a página principal
      window.location.href = "/pagina-principal";
    } catch (error) {
      console.error("Ocorreu um erro ao fazer login:", error);
      setErrorMessage("Ocorreu um erro ao fazer login!");
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

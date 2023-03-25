import React, { useState } from "react";
import * as S from "./LoginRegister";
import Logo from "../components/Img/Logo";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <S.Container>
    <S.Card>
        <Logo alt="My Logo" />
        <S.Title>Login</S.Title>
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
        <a href="/registro"><S.Button>Register</S.Button></a>
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

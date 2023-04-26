import React, { useState } from "react";
import * as S from "./LoginRegister";
import Logo from "../components/Img/Logo";
import axios, { AxiosError } from "axios";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebaseConfig";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [signInWithEmailAndPassword, user,  error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e: { preventDefault: () => void; }) {
    e.preventDefault();
    
    signInWithEmailAndPassword(email, password);
    if (user) {
      window.location.href = "/home";
    }else if (error){
      setErrorMessage("Erro ao tentar fazer login. Tente novamente.");
    }
  }

  return (
    <S.Container>
      <S.Card>
        <Logo alt="My Logo" />
        <S.Title>Login</S.Title>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Form>
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
          <S.Button type="submit" onClick={handleSignIn}>Login</S.Button>
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

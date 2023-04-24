import React, { useState } from "react";
import * as S from "./LoginRegister";
import Logo from "../components/Img/Logo";
import axios, { AxiosError } from "axios";

const RegistroForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não correspondem.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/register", {
        name,
        email,
        password,
      });
      const { access_token } = response.data;
      localStorage.setItem("token", access_token);
      window.location.href = "/dashboard";
    } catch (error: AxiosError | any) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(
          "Erro ao tentar se registrar. Tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <S.Card>
      <Logo alt="My Logo" />
      <S.Title>Registro</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <S.InputField>
          <S.Label htmlFor="name">Nome:</S.Label>
          <S.Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </S.InputField>
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
        <S.InputField>
          <S.Label htmlFor="password">Confirme o password:</S.Label>
          <S.Input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </S.InputField>
        {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <S.Button type="submit">Registro</S.Button>
      </S.Form>
      <a href="/login">
        <S.Button>Fazer login</S.Button>
      </a>
    </S.Card>
  );
};

const Registro = () => {
  return (
    <div>
      <S.Container>
        <RegistroForm />
      </S.Container>
    </div>
  );
};

export default Registro;

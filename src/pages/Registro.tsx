import React, { useState } from "react";
import * as S from "./LoginRegister";
import Logo from "../components/Img/Logo";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../services/firebaseConfig";
import { AuthLoading } from "../components";

const RegistroForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); 
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSignOut(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setIsLoading(true); // inicia a exibição do componente de carregamento
    try {
      await createUserWithEmailAndPassword(email, password);
      setIsLoading(false); // finaliza a exibição do componente de carregamento
      window.location.href = "/login";
    } catch (error) {
      setIsLoading(false); // finaliza a exibição do componente de carregamento
      setErrorMessage("Erro ao tentar se registrar. Tente novamente.");
    }
  }

  return (
    <S.Card>
      <Logo alt="My Logo" />
      <S.Title>Registro</S.Title>
      <S.Form>
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
        <S.Button type="submit" onClick={handleSignOut}>Registro</S.Button>
      </S.Form>
      <a href="/login">
        <S.Button>Fazer login</S.Button>
      </a>
      {isLoading && <AuthLoading />}
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

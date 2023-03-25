import React, { useState } from "react";
import * as S from "./LoginRegister";
import Logo from "../components/Img/Logo";

const RegistroForm = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Nome: ${nome}, Email: ${email}, Password: ${password}`);
  };

  return (
    <S.Card>
        <Logo alt="My Logo" />
        <S.Title>Registro</S.Title>
        <S.Form onSubmit={handleSubmit}>
            <S.InputField>
                <S.Label htmlFor="nome">Nome:</S.Label>
                <S.Input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
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
            <S.Button type="submit">Registro</S.Button>
        </S.Form>
        <a href="/login"><S.Button>Fazer login</S.Button></a>
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

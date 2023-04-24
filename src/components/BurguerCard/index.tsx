import React from "react";
import * as S from "./style";

export interface LancheCardProps {
  selecionado: boolean;
}

export interface Burguer {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagemUrl: string;
}

export const BurguerCard: React.FC<{
  burguer: Burguer;
  selecionado: boolean;
  onClick: () => void;
}> = ({ burguer, selecionado, onClick }) => (
  <S.BurguerCard onClick={onClick}>
    <img src={burguer.imagemUrl} alt={burguer.nome} />
    <h3>{burguer.nome}</h3>
    <p>{burguer.descricao}</p>
    <span>R${burguer.preco.toFixed(2)}</span>
  </S.BurguerCard>
  
);

import React, { HTMLProps } from "react";
import * as S from "./style";

export interface IContainer extends HTMLProps<HTMLElement> {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return (
    <>
      
      <S.Container>{children}</S.Container>
      <S.Header></S.Header>
    </>
  );
};

export default Container;

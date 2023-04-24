import React, { HTMLProps } from "react";
import * as S from "./style";

export interface IContent extends HTMLProps<HTMLElement> {
  children: React.ReactNode;
}

const MainContent = ({ children }: IContent) => {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  );
};

export default MainContent;

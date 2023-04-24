import React, { useEffect, useState } from "react";
import { Contained, Loading, MenuComponent } from "../../../components";
import * as S from "./style";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Home">
          <MenuComponent />
          <Contained>
            <S.Content>
              <h1 className="title">Bem vindo ao Rush Eats!</h1>
              <S.CardContainer>
                <div className="card card1">
                  <h3 className="text-card">Faça seu pedido</h3>
                </div>
                <div className="card card2">
                  <h3 className="text-card">É rápido, prático e seguro</h3>
                </div>
                <div className="card card3">
                  <h3 className="text-card">
                    10% de desconto na primeira compra
                  </h3>
                </div>
              </S.CardContainer>
            </S.Content>
          </Contained>
        </div>
      )}
    </>
  );
};

export default Home;

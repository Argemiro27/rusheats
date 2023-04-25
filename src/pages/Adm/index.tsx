import React, { useEffect, useState } from "react";
import { Loading, MenuComponent } from "../../components";
import * as S from "./style";

const Adm = () => {
  const [nomeproduto, setNomeProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [bgProduto, setbgProduto] = useState("");
  const [errorMessage] = useState("");
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
        <div className="Adm">
          <MenuComponent />
          <S.Content>
            <div className="wrapper cadastraprodutosWrapper">
              <h1 className="title">Cadastrar Produtos</h1>
              <S.Form>
                <S.InputField>
                  <S.Label htmlFor="nomeproduto">Nome do Produto:</S.Label>
                  <S.Input
                    type="text"
                    id="nomeproduto"
                    value={nomeproduto}
                    onChange={(e) => setNomeProduto(e.target.value)}
                  />
                </S.InputField>
                <S.InputField>
                  <S.Label htmlFor="preco">Preço:</S.Label>
                  <S.Input
                    type="text"
                    id="preco"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                  />
                </S.InputField>
                <S.InputField>
                  <S.Label htmlFor="estoque">Estoque:</S.Label>
                  <S.Input
                    type="text"
                    id="estoque"
                    value={estoque}
                    onChange={(e) => setEstoque(e.target.value)}
                  />
                </S.InputField>
                <S.InputField>
                  <S.Label htmlFor="bgProduto">Foto do produto:</S.Label>
                  <S.Input
                    type="link"
                    id="bgProduto"
                    value={bgProduto}
                    onChange={(e) => setbgProduto(e.target.value)}
                  />
                </S.InputField>
                {errorMessage && (
                  <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
                )}
                <S.Button type="submit">REGISTRAR PRODUTO</S.Button>
              </S.Form>
            </div>
            <div className="wrapper listadevendasWrapper">
              <h1 className="title">Lista de Vendas </h1>
            </div>
          </S.Content>
        </div>
      )}
    </>
  );
};

export default Adm;

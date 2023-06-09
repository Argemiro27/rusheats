import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Container, Loading, MenuComponent } from "../../../components";
import { Burguer, BurguerCard } from "../../../components/BurguerCard";
import { burguers } from "../../../services/burguer";
import { Modal } from "../../../components";

const Produtos: React.FC = () => {
  const [burguerSelecionado, setBurguerSelecionado] = useState<number | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [listaBurguers] = useState<Burguer[]>(burguers);

  const handleBurguerClick = (id: number) => {
    setBurguerSelecionado(id === burguerSelecionado ? null : id);
    setModalOpen(true);
  };

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  const selectedBurguer = listaBurguers.find(
    (burguer) => burguer.id === burguerSelecionado
  );

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
        <div className="Produtos">
          <MenuComponent />
          <Container>
            <h1 className="title">Faça seu pedido!</h1>
            <S.bgBurguer>
              <div className="burguer"></div>
            </S.bgBurguer>
            <S.Burguers>
              <div className="burguers">
                {listaBurguers.map((burguer) => (
                  <BurguerCard
                    key={burguer.id}
                    burguer={burguer}
                    selecionado={burguer.id === burguerSelecionado}
                    onClick={() => handleBurguerClick(burguer.id)}
                  />
                ))}
              </div>
            </S.Burguers>
            {selectedBurguer ? (
              <Modal
                isOpen={modalOpen}
                onClose={handleModalToggle}
                burguer={selectedBurguer}
              />
            ) : null}
          </Container>
        </div>
      )}
    </>
  );
};

export default Produtos;

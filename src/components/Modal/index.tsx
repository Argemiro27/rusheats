import ReactModal from "react-modal";
import { Burguer } from "../BurguerCard";
import { useEffect, useState } from "react";
import Select from "react-select";
import { optionsPagamento } from "../../services/optionsPagamento";
import { modalContentStyle, modalOverlayStyle } from "./style";
import * as S from "./style";

const Modal = (props: {
  isOpen: boolean;
  onClose: () => void;
  burguer: Burguer;
}) => {
  const [options, setOptions] = useState({
    ketchup: false,
    batataFrita: false,
  });

  const handleOptionChange = (event: {
    target: { name: any; checked: any };
  }) => {
    const { name, checked } = event.target;
    setOptions((prevState: any) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const [total, setTotal] = useState(props.burguer.preco);

  useEffect(() => {
    let newTotal = props.burguer.preco;
    if (options.ketchup) {
      newTotal += 6.5;
    }
    if (options.batataFrita) {
      newTotal += 1.5;
    }
    setTotal(newTotal);
  }, [props.burguer.preco, options]);

  const [pagamento] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log({ options, pagamento, total });
  };

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onClose}
      style={{ overlay: modalOverlayStyle, content: modalContentStyle }}
    >
      <S.ModalButton onClick={props.onClose}>X</S.ModalButton>
      <S.ModalWrapper>
        <S.ModalTitle>{props.burguer.nome}</S.ModalTitle>
        <S.ModalDescription>{props.burguer.descricao}</S.ModalDescription>
        <S.ModalDescription>R$ {props.burguer.preco}</S.ModalDescription>
        <S.Form onSubmit={handleSubmit}>
          <S.FormGroup>
            <S.Label>
              <div className="ketchup" />
              <S.Input
                type="checkbox"
                name="ketchup"
                checked={options.ketchup}
                onChange={handleOptionChange}
                value="6,50"
              />
              Ketchup + R$6,50
            </S.Label>
          </S.FormGroup>
          <S.FormGroup>
            <S.Label>
              <div className="batatafrita" />
              <S.Input
                type="checkbox"
                name="batataFrita"
                checked={options.batataFrita}
                onChange={handleOptionChange}
                value="1,50"
              />
              Batata Frita + R$1,50
            </S.Label>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>
              <Select options={optionsPagamento} />
            </S.Label>
          </S.FormGroup>
          <S.FormGroup><div className="total">Total: R$ {total}</div></S.FormGroup>
          <S.Button type="submit">Comprar</S.Button>
        </S.Form>
      </S.ModalWrapper>
    </ReactModal>
  );
};

export default Modal;

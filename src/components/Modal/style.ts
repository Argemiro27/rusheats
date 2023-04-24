import styled from "styled-components";

export const modalOverlayStyle = {
  backgroundColor: "rgba(128, 84, 55, 0.5)",
};

export const modalContentStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "90%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#141414",
  borderRadius: "15px",
  borderColor: "orange",
  padding: "20px",
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  .total{
    color: gray;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: orange;
  width: 25vh;
  border-radius: 10px;
  .ketchup {
    background-image: url("/assets/ketchup.png");
    background-position: center;
    background-size: cover;
    height: 20vh;
    width: 25vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .batatafrita {
    background-image: url(/assets/batatafrita.png);
    background-position: center;
    background-size: cover;
    height: 20vh;
    width: 12vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #ffd700;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h2`
  color: gray;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: -35px;
`;

export const ModalDescription = styled.p`
  color: gray;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ModalButton = styled.button`
  background-color: #ffd700;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

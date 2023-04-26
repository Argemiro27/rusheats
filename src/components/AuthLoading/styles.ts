import { colors } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: ${colors.orange};
  .modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #000;
}
`;

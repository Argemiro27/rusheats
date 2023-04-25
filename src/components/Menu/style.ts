import styled from "styled-components";
import { colors } from "../../styles/colors";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 100%;
  color: ${colors.borderBg};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 1;
  right: 0;
  margin: auto;
  background-color: ${colors.contentBg};
  border: 1px solid ${colors.borderBg};
  box-shadow: 3px 3px 3px ${colors.black};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  color: ${colors.borderBg};
  &:hover {
    background-color: ${colors.primary};
  }
`;

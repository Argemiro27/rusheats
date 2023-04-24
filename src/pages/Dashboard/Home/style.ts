import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const Content = styled.div`
  .title {
    margin-bottom: 25px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  .card {
    width: 300px;
    height: 350px;
    margin: 10px;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    filter: grayscale(70%);
    :hover {
      transition: 0.8s;
      filter: grayscale(0%);
    }
    .text-card {
      background-color: ${colors.darkgray};
      min-height: 10vh;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${colors.lightgray};
    }
  }
  .card.card1 {
    background-image: url("/assets/bgCard1.jpg");
  }
  .card.card2 {
    background-image: url("/assets/bgCard2.jpg");
  }
  .card.card3 {
    background-image: url("/assets/bgCard3.jpg");
  }
`;

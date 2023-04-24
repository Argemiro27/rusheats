import styled from "styled-components";

  export const BurguerCard = styled.div`
  width: 250px;
  height: 300px;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #2e2e2e ;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  
  img {
  width: 100%;
  height: 110px;
  object-fit: cover;
  border-radius: 5px;
  }
  
  h3 {
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #636363;
  }
  
  p {
    margin-top: 10px;
    
  font-size: 16px;
  text-align: center;
  color: #777777;
  }
  
  span {
  margin-top: 10px;
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: orange;
  }
  `;
import styled from "styled-components";
import { colors } from "../../styles/colors";


export const Container = styled.div`
    background-color: ${colors.contentBg};
    border: 1px solid ${colors.borderBg};
    box-shadow: 3px 3px 3px ${colors.black};
    color: ${colors.primary};
    border-radius: 10px;
    height: 70vh;
    width: 140vh;
    padding: 30px;
    position: absolute;
    left: 0; right: 0; bottom: 0; top: 0;
    margin: auto;
    
    
    text-align: center;
    justify-content: center;
    align-items: center;
`
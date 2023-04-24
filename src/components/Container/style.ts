import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Header = styled.header`
    height: 100vh;
    width: 50vh;
    background-image: url("/assets/bgHeader.jpg");
    background-size: cover;
    position: absolute;
    left: 0; right: 1; bottom: 0; top: 0;
    margin: auto;
`

export const Container = styled.div`
    background-color: ${colors.contentBg};
    border-left: 3px solid ${colors.primary};
    border-right: 1px solid ${colors.primary};
    box-shadow: 3px 3px 3px ${colors.black};
    color: ${colors.primary};
    height: 100vh;
    width: 130vh;
    padding: 30px;
    position: absolute;
    left: 210px; right: 0; bottom: 0; top: 0;
    margin: auto;
    text-align: center;
    justify-content: center;
    align-items: center;
`
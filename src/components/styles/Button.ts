import styled from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
    theme: DefaultTheme;
}

const Button = styled.button<ButtonProps>`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: gray;
    color: white;
`;

export default Button ;
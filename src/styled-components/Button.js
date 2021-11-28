import styled from 'styled-components';
import { paddingSm, buttonMinWidth } from "../constants/dimentions";

const Button = styled.button`
    border-radius: 1000px;
    padding: ${paddingSm}px ${paddingSm}px;
    border: none;
    cursor: pointer;
    min-width: ${buttonMinWidth}px;
`;

export default Button;
import styled from 'styled-components';
import { inputHeightSm, borderRadiusSm } from "../constants/dimentions";
import { lightgray } from "../constants/colors";

const Input = styled.input`
    background-color: ${lightgray};
    border-radius: ${borderRadiusSm}px;
    height: ${inputHeightSm}px;
    border: none;
    font-size: 12px;
    &:active, &:focus {
        outline: none;
        border: none;
    }
    &::placeholder {
        color: #000000;
    }
`;

export default Input;
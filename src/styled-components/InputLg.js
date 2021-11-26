import styled from 'styled-components';
import { inputHeightSm, borderRadiusSm } from "../constants/dimentions";
import { lightgray } from "../constants/colors";

const InputLg = styled.input`
    background-color: ${lightgray};
    border-radius: ${borderRadiusSm}px;
    margin: auto;
    height: ${inputHeightSm}px;
    border: none;
`;

export default InputLg;
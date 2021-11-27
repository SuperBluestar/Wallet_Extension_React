import styled from 'styled-components';
import { inputHeightSm, borderRadiusSm } from "../constants/dimentions";
import { lightgray, white } from "../constants/colors";

const InputWhite = styled.input`
    background-color: ${white};
    border-radius: 1000px;
    margin: auto;
    height: ${inputHeightSm}px;
    border: none;
`;

export default InputWhite;
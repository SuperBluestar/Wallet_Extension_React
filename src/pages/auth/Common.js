import styled from 'styled-components';

import InputSm from '../../styled-components/InputSm';
import TextLg from '../../styled-components/TextLg';
import TextSm from '../../styled-components/TextSm';
import { marginMd } from "../../constants/dimentions";

export const Logo = styled(TextLg)``;
export const Title = styled(TextLg)``;
export const FullInput = styled(InputSm)`
    width: 100%;
    text-align: center;
    margin-top: ${marginMd}px;
    margin-bottom: ${marginMd}px;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextUnderline = styled(TextSm)`
    text-decoration: underline;
`;

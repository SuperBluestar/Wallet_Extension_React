import ButtonGreen from "../../styled-components/ButtonGreen";
import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import { marginLg, marginMd, marginSm } from '../../constants/dimentions';
import { useNavigate } from "react-router-dom";
import InputMd from "../../styled-components/InputMd";
import styled from "styled-components";

export const InputBox = styled(InputMd)`
    border: none;
    height: 45px;
    text-align: center;
    outline: none;
    width: 85%;
    margin-top: 16px;
    margin-bottom: 16px;
`;

const Index = () => {
    const navigate = useNavigate();
    return (<>
        <TextMd>From:</TextMd>
        <InputBox placeholder={`Account 1`}></InputBox>
        <TextMd>To:</TextMd>
        <InputBox placeholder={`Add address, search or read qr`}></InputBox>
        <TextMd>Transfer between my accounts</TextMd>
    </>)
}

export default Index;
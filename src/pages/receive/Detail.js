import { marginLg, inputHeightLg, marginSm } from "../../constants/dimentions";
import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import ComboBox from '../../components/ComboBox';
import styled from "styled-components";
import InputWhite from "../../styled-components/InputWhite";
import ButtonGreen from "../../styled-components/ButtonGreen";
import { useParams, useNavigate } from "react-router-dom";

const AmountInput = styled(InputWhite)`
    height: ${inputHeightLg}px;
    text-align: center;
    margin: ${marginLg}px 0;
    box-shadow: 0 0px 10px grey;
    border: none;
    outline: none;
`;

const Detail = () => {
    const { method } = useParams();
    const navigate = useNavigate();
    return (<>
        <TextLg style={{
            margin: `${marginLg}px 0`,
        }}>Request a payment</TextLg>
        <ComboBox 
            list={[{text: "Choose asset"},{text: "Asset 01"},{text: "Asset 02"},]}
            onChange={() => {}}
        />
        <TextMd style={{
            margin: `${marginLg}px 0`,
        }}>Amount</TextMd>
        <AmountInput />
        <TextMd style={{
            margin: `${marginLg}px 0`,
        }}>Balance</TextMd>.
        <ButtonGreen style={{
            marginBottom: `${marginSm}px`,
        }} onClick={() => navigate(`/main/receive/${method}?amount=500`)}>Next</ButtonGreen>
    </>)
}

export default Detail;
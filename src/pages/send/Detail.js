import { marginLg, inputHeightLg, marginMd } from "../../constants/dimentions";
import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import ComboBox from '../../components/ComboBox';
import styled from "styled-components";
import InputWhite from "../../styled-components/InputWhite";
import ButtonGreen from "../../styled-components/ButtonGreen";
import { useParams, useNavigate } from "react-router-dom";

export const AmountInput = styled(InputWhite)`
    height: ${inputHeightLg}px;
    text-align: center;
    margin: ${marginLg}px 0;
    box-shadow: 0 0px 10px grey;
    border: none;
    outline: none;
`;

const Detail = () => {
    const navigate = useNavigate();
    return (<>
        <ComboBox 
            style={{    
                marginTop: `${marginMd}px`,
                marginBottom: `${marginMd}px`,
            }}
            list={[{text: "Choose asset"},{text: "Asset 01"},{text: "Asset 02"},]}
            onChange={() => {}}
        />
        <TextMd>Amount</TextMd>
        <AmountInput />
        <TextMd>Balance</TextMd>
    </>)
}

export default Detail;
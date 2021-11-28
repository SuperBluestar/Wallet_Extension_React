import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputWhite from "../../styled-components/InputWhite";
import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import { inputHeightLg, marginLg, marginSm, marginMd } from "../../constants/dimentions";
import TextSm from "../../styled-components/TextSm";
import ButtonGreen from "../../styled-components/ButtonGreen";

const TextUnderline = styled(TextMd)`
    text-decoration: underline;
    margin: ${marginMd}px 0;
`;

const AmountInput = styled(InputWhite)`
    height: ${inputHeightLg}px;
    text-align: center;
    margin: ${marginLg}px 0;
    box-shadow: 0 0px 10px grey;
    border: none;
    outline: none;
`;

const AddFundsIndex = () => {
    const navigate = useNavigate();
    return (
        <>
            <TextLg style={{
                margin: `${marginMd}px 0`
            }}>Add funds</TextLg>
            <TextMd style={{
                margin: `${marginSm}px 0`
            }}>BUY</TextMd>
            <div>*BUSD logo here*</div>
            <TextUnderline>Choose other asset</TextUnderline>
            <TextLg style={{
                margin: `${marginSm}px 0`
            }}>Amount</TextLg>
            <AmountInput />
            <TextSm style={{
                margin: `${marginSm}px 0`
            }}>*saved Credit card* xxxxxx 4321</TextSm>
            <TextMd style={{
                margin: `${marginSm}px 0`
            }}>+Add Credit or Debit Card</TextMd>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: `${marginLg}px`,
            }}>
                <ButtonGreen onClick={() => navigate("/main/add-funds/credit-detail")}>Next</ButtonGreen>
            </div>
        </>
    )
}

export default AddFundsIndex;
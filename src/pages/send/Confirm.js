import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import ButtonGreen from "../../styled-components/ButtonGreen";
import { marginLg, marginSm } from "../../constants/dimentions";
import { useNavigate } from "react-router-dom";
import AmountInput from "../../components/AmountInput";

import { InputBox } from './Index';

const Confirm = () => {
    const navigate = useNavigate();
    return (<>
        <TextMd>From:</TextMd>
        <InputBox placeholder={`Account 1`}></InputBox>
        <TextMd>To:</TextMd>
        <InputBox placeholder={`Account 2`}></InputBox>
        <TextMd>Amount</TextMd>
        <AmountInput />
        <TextMd>Balance</TextMd>
    </>)
}

export default Confirm;
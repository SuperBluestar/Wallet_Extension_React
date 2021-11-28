import { useNavigate } from "react-router-dom";
import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import { marginMd, marginSm, marginLg } from "../../constants/dimentions";
import { useState } from "react";
import RadioButton from '../../components/RadioButton';
import InputWhite from "../../styled-components/InputWhite";
import styled from "styled-components";
import ButtonGreen from "../../styled-components/ButtonGreen";

const InputBox = styled(InputWhite)`
    border: none;
    box-shadow: 0px 2px 10px grey;
    margin: ${marginSm}px 0;
    text-align: center;
    &:focus {
        border: none;
        outline: none;
    }
`;

const cardTypes = [{
    type: "visa", text: "Visa"
},{
    type: "mastercard", text: "Mastercard"
},]

const AddFundsCreditDetail = () => {
    const navigate = useNavigate();
    const [cardType, setCardType] = useState(0);
    return (
        <>
            <TextLg style={{
                margin: `${marginMd}px 0`
            }}>Credit card details</TextLg>
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
            }}>
                {cardTypes.map((radio, id) => (
                    <RadioButton key={id} text={radio.text} active={cardType === id} onClick={() => setCardType(id)}></RadioButton>
                ))}
            </div>
            <TextMd style={{
                textAlign: "center",
            }}>Card number</TextMd>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <InputBox placeholder={"4470 xxxxxxxxxx 4321"}/ >
            </div>
            <TextMd style={{
                textAlign: "center",
            }}>Exp. date</TextMd>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <InputBox style={{
                    width: "40%",
                }} placeholder={"01"}/ > / <InputBox style={{
                    width: "40%",
                }} placeholder={"2021"}/ >
            </div>
            <TextMd style={{
                textAlign: "center",
            }}>Full name in the card</TextMd>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <InputBox placeholder={"Mark Doe"}/ >
            </div>
            <TextMd style={{
                textAlign: "center",
            }}>CVV</TextMd>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <InputBox style={{
                    width: "50%"
                }} placeholder={"XXX"}/ >
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: `${marginLg}px`,
            }}>
                <ButtonGreen onClick={() => {}}>Add Card</ButtonGreen>
            </div>
        </>
    )
}

export default AddFundsCreditDetail;
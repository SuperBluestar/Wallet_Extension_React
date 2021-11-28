import ButtonGreen from "../../styled-components/ButtonGreen";
import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import { marginLg, marginMd, marginSm } from '../../constants/dimentions';
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (<>
        <TextLg style={{
            margin: `${marginLg}px 0`,
        }}>Request a payment</TextLg>
        <TextMd style={{
            margin: `${marginLg}px 0`,
        }}>Send link</TextMd>
        <TextMd>Your request is ready to send!</TextMd>
        <TextMd style={{
            margin: `${marginMd}px`,
            width: `50%`,
            textAlign: "center",
        }}>Send this link to a friend, and it will ask them to send *amount & token here*</TextMd>
        <TextMd style={{
            margin: `${marginLg}px`,
            textAlign: "center",
        }}>*link here*</TextMd>
        <ButtonGreen style={{
            marginBottom: `${marginSm}px`,
        }}>Copy to clipboard</ButtonGreen>
        <ButtonGreen style={{
            marginBottom: `${marginSm}px`,
        }} onClick={() => navigate('/main/receive/detail/qr-code')}>QR code</ButtonGreen>
        <ButtonGreen style={{
            marginBottom: `${marginSm}px`,
        }}>Send link</ButtonGreen>
    </>)
}

export default Index;
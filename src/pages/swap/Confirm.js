import SwapDownIcon from "../../components/Icons/SwapDown";
import RefreshIcon from "../../components/Icons/Refresh";
import TextMd from "../../styled-components/TextMd";
import TextLg from "../../styled-components/TextLg";
import TextSm from "../../styled-components/TextSm";
import styled from "styled-components";
import HigtLight from "../../styled-components/HighLight";
import { borderRadiusSm, paddingMd, paddingSm } from "../../constants/dimentions";
import ButtonGreen from '../../styled-components/ButtonGreen';

const BillingHighLight = styled(HigtLight)`
    border-radius: ${borderRadiusSm}px;
    width: 100%;
    padding: ${paddingMd}px ${paddingSm}px;
    box-sizing: border-box;
`;

const BillingOneLine = styled.div`
    display: flex;
    justify-content: space-between;
`;

const BillingOneLineRight = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const TextMdUnderline = styled(TextMd)`
    text-decoration: underline;
`;

const TextSmUnderline = styled(TextSm)`
    text-decoration: underline;
`;

const Confirm = () => {
    return (
        <>
            <TextMd>0,175 BNB</TextMd>
            <SwapDownIcon />
            <TextMd>BUSD</TextMd>
            <TextLg>10</TextLg>
            <div style={{
                display: "flex",
            }}>
                <TextMd>1 BUSD = 0.0017000000 BNB</TextMd>
                <RefreshIcon />
            </div>
            <BillingHighLight>
                <BillingOneLine>
                    <TextMd>Using the best quote</TextMd>
                    <TextMdUnderline>Details</TextMdUnderline>
                </BillingOneLine>
                <BillingOneLine>
                    <TextSm>Estimated gas fee</TextSm>
                    <TextSmUnderline>0.0008 BNB</TextSmUnderline>
                </BillingOneLine>
                <BillingOneLineRight>
                    <TextSm>0.39 €</TextSm>
                </BillingOneLineRight>
                <BillingOneLine>
                    <TextSm>Max gas fee</TextSm>
                    <TextSmUnderline>0.0008 BNB</TextSmUnderline>
                </BillingOneLine>
                <BillingOneLineRight>
                    <TextSm>0.70 €</TextSm>
                </BillingOneLineRight>
                <BillingOneLine>
                    <TextSm>This will ENABLE BUSD for swapping</TextSm>
                    <TextSmUnderline>Edit limit</TextSmUnderline>
                </BillingOneLine>
                <hr style={{
                    width: "100%",
                }}/>
                <BillingOneLine>
                    <TextSm>Quotes include a 0,875% MetaMask fee</TextSm>
                </BillingOneLine>
            </BillingHighLight>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 0
            }}>
                <ButtonGreen onClick={() => {}}>Confirm Swap</ButtonGreen>
            </div>
        </>
    )
}

export default Confirm;
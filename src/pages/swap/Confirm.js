import SwapDownIcon from "../../components/Icons/SwapDown";
import RefreshIcon from "../../components/Icons/Refresh";
import TextMd from "../../styled-components/TextMd";
import TextLg from "../../styled-components/TextLg";
import styled from "styled-components";
import HigtLight from "../../styled-components/HighLight";
import { borderRadiusSm } from "../../constants/dimentions";

const BillingHighLight = styled(HigtLight)`
    border-radius: ${borderRadiusSm}px;
`;

const BillingOneLine = styled.div`
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
            </BillingHighLight>
        </>
    )
}

export default Confirm;
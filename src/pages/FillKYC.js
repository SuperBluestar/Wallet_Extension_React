import SwapDownIcon from "../components/Icons/SwapDown";
import UpIcon from "../components/Icons/Up";
import TextMd from "../styled-components/TextMd";
import TextLg from "../styled-components/TextLg";
import styled from "styled-components";
import HigtLight from "../styled-components/HighLight";
import InputMd from "../styled-components/InputMd";
import { borderRadiusSm, paddingLg, marginSm, paddingMd, paddingSm, marginLg, marginMd, topbarHeight } from "../constants/dimentions";
import ButtonGreen from '../styled-components/ButtonGreen';
import Button from "../styled-components/Button";
import { gray } from '../constants/colors';
import ScrollContainer from "react-indiana-drag-scroll";

const BillingHighLight = styled(InputMd)`
    border-radius: ${borderRadiusSm}px;
    width: 100%;
    padding: ${paddingMd}px ${paddingSm}px;
    box-sizing: border-box;
    margin: ${marginSm}px;
    text-align: center;
`;

const TextMdUnderline = styled(TextMd)`
    text-decoration: underline;
    cursor: pointer;
`;

const ButtonGray = styled(Button)`
    background-color: ${gray};
`;

const FillKYC = () => {
    return (
        <ScrollContainer style={{
            height: `calc(100vh - ${topbarHeight}px)`,
        }} vertical={true} horizontal={false} hideScrollbars={true}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                alignItems: "center",
            }}>
                <TextLg style={{
                    margin: `${marginLg}px 0`
                }}>Valo.id.logo</TextLg>
                <TextLg style={{
                    margin: `${marginLg}px 0`
                }}>Establish your credibility:</TextLg>
            </div>
            <div style={{
                padding: `${paddingMd}px`,
            }}>
                <div style={{
                    boxShadow: "3px 0 5px gray",
                    borderRadius: `${borderRadiusSm}px`,
                    padding: `${paddingSm}px ${paddingLg}px`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <TextMd style={{
                        padding: `${paddingLg}px 0`
                    }}>Fill your KYC</TextMd>

                    <TextMd>Tire 2</TextMd>
                    <BillingHighLight placeholder="Full name"/>
                    <BillingHighLight placeholder="Address"/>
                    <BillingHighLight placeholder="Phone"/>
                    <BillingHighLight placeholder="Backup e-mail"/>
                    <TextMd style={{
                        margin: `${marginLg}px 0`
                    }}>Tire 3</TextMd>
                    <TextMd style={{
                        width: "60%",
                        textAlign: "center",
                    }}>Upload photo of drivers license of passport</TextMd>
                    <ButtonGray style={{
                        margin: `${marginSm}px`
                    }}>
                        <UpIcon  />
                    </ButtonGray>
                    <TextMd style={{
                        width: "60%",
                        textAlign: "center",
                    }}>Upload an invoice with your address showing</TextMd>
                    <ButtonGray style={{
                        margin: `${marginSm}px`
                    }}>
                        <UpIcon  />
                    </ButtonGray>
                    <ButtonGreen onClick={() => {}} style={{marginTop:`${marginLg}px`}}>Next</ButtonGreen>
                    <TextMdUnderline>Later(use only tier 1 KYC)</TextMdUnderline>
                    <TextMd style={{
                        margin: `${marginMd}px`
                    }}>2/2</TextMd>
                </div>
            </div>
        </ScrollContainer>
    )
}

export default FillKYC;
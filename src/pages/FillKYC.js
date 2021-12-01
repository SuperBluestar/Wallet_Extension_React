import { useState } from "react";
import SwapDownIcon from "../components/Icons/SwapDown";
import RefreshIcon from "../components/Icons/Refresh";
import InfoIcon from "../components/Icons/Info";
import TextMd from "../styled-components/TextMd";
import TextLg from "../styled-components/TextLg";
import TextSm from "../styled-components/TextSm";
import styled from "styled-components";
import HigtLight from "../styled-components/HighLight";
import { borderRadiusSm, marginMd, marginSm, paddingMd, paddingSm, marginLg } from "../constants/dimentions";
import ButtonGreen from '../styled-components/ButtonGreen';
import Button from "../styled-components/Button";
import { gray } from '../constants/colors';

const BillingHighLight = styled(HigtLight)`
    border-radius: ${borderRadiusSm}px;
    width: 100%;
    padding: ${paddingMd}px ${paddingSm}px;
    box-sizing: border-box;
`;

const BillingOneLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${marginSm}px 0;
`;

const BillingOneLineRight = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const TextMdUnderline = styled(TextMd)`
    text-decoration: underline;
    cursor: pointer;
`;

const TextSmUnderline = styled(TextSm)`
    text-decoration: underline;
    cursor: pointer;
`;

const Title = styled(TextMd)`
    font-weight: 700;
    margin: ${marginSm}px 0;
`;

const ButtonGray = styled(Button)`
    background-color: ${gray};
`;

const Confirm = () => {
    return (
        <>
            <div style={{
                flexGrow: 1,
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
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}>  
                <TextMd style={{
                    margin: `${marginLg}px 0`
                }}>Fill your KYC</TextMd>

                <TextMd style={{
                    margin: `${marginLg}px 0`
                }}>Tire 2</TextMd>
                <div style={{
                    alignItems: "center",
                    display: "block",
                    width: "65%",
                }}>
                    <BillingHighLight style={{textAlign:"center", marginBottom:"10%"}}>
                        <TextMd>Full name</TextMd>
                    </BillingHighLight>
                    <BillingHighLight style={{textAlign:"center", marginBottom:"10%"}}>
                        <TextMd>Address</TextMd>
                    </BillingHighLight>
                    <BillingHighLight style={{textAlign:"center", marginBottom:"10%"}}>
                        <TextMd>Phone</TextMd>
                    </BillingHighLight>
                    <BillingHighLight style={{textAlign:"center", marginBottom:"10%"}}>
                        <TextMd>Backup e-mail</TextMd>
                    </BillingHighLight>

                    <TextMd style={{
                        margin: `${marginLg}px 0`,
                        textAlign:"center"
                    }}>Tire 3</TextMd>
                    <TextMd style={{
                        textAlign:"center"
                    }}>Upload photo of drivers</TextMd>
                    <TextMd style={{
                        textAlign:"center"
                    }}>license of passport</TextMd>

                    <ButtonGray style={{margin:'0 0 10%'}}>
                        <SwapDownIcon  />
                    </ButtonGray>

                    <TextMd style={{
                        textAlign:"center"
                    }}>Upload an invoice with</TextMd>
                    <TextMd style={{
                        textAlign:"center"
                    }}>your address showing</TextMd>

                    <ButtonGray style={{margin:'0 0 10%'}}>
                        <SwapDownIcon  />
                    </ButtonGray>

                    <ButtonGreen onClick={() => {}} style={{textAlign:'center'}}>Next</ButtonGreen>
                    
                    <TextMdUnderline style={{textAlign:'center', marginTop:'10%'}}>Later(use only tier 1 KYC)</TextMdUnderline>

                    <TextMd style={{
                        margin: `${marginLg}px 0`,
                        textAlign: 'center',
                    }}>2/2</TextMd>
                </div>
                
            </div>
        </>
    )
}

export default Confirm;
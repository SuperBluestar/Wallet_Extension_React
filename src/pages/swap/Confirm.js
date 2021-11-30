import { useState } from "react";
import SwapDownIcon from "../../components/Icons/SwapDown";
import RefreshIcon from "../../components/Icons/Refresh";
import InfoIcon from "../../components/Icons/Info";
import TextMd from "../../styled-components/TextMd";
import TextLg from "../../styled-components/TextLg";
import TextSm from "../../styled-components/TextSm";
import styled from "styled-components";
import HigtLight from "../../styled-components/HighLight";
import { borderRadiusSm, marginMd, marginSm, paddingMd, paddingSm, marginLg } from "../../constants/dimentions";
import ButtonGreen from '../../styled-components/ButtonGreen';
import ReactModal from 'react-modal';
import Left1Icon from "../../components/Icons/Left1";
import RadioButton from '../../components/RadioButton';
import AmountInput from "../../components/AmountInput";
import XButton from '../../styled-components/XButton';

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

const Confirm = () => {
    const [openQuote, setOpenQuote] = useState(false);
    const [openQuoteDetail, setOpenQuoteDetail] = useState(false);
    const [openEditLimit, setOpenEditLimit] = useState(false);
    const [openGasFee, setOpenGasFee] = useState(false);
    const [openMetamaskFee, setOpenMetamaskFee] = useState(false);
    const [activeRadio, setActiveRadio] = useState("default");
    return (
        <>
            <div style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}>
                <TextMd>0,175 BNB</TextMd>
                <SwapDownIcon  style={{
                    margin: `${marginMd}px 0`
                }}/>
                <TextMd>BUSD</TextMd>
                <TextLg style={{
                    margin: `${marginLg}px 0`
                }}>10</TextLg>
                <div style={{
                    display: "flex",
                    margin: `${marginSm}px 0`
                }}>
                    <TextMd style={{
                        marginRight: `${marginSm}px`
                    }}>1 BUSD = 0.0017000000 BNB</TextMd>
                    <RefreshIcon />
                </div>
                <BillingHighLight>
                    <BillingOneLine>
                        <TextMd>Using the best quote</TextMd>
                        <TextMdUnderline onClick={() => {setOpenQuote(true)}}>Details</TextMdUnderline>
                    </BillingOneLine>
                    <BillingOneLine>
                        <TextSm style={{
                            marginRight: `${marginSm}px`
                        }}>Estimated gas fee</TextSm>
                        <InfoIcon style={{
                            cursor: "pointer"
                        }} onClick={() => {setOpenGasFee(true)}}/>
                        <TextSm style={{
                            flexGrow: 1,
                            textAlign: "right",
                        }}>0.0008 BNB</TextSm>
                    </BillingOneLine>
                    <BillingOneLineRight>
                        <TextSm>0.39 €</TextSm>
                    </BillingOneLineRight>
                    <BillingOneLine>
                        <TextSm>Max gas fee</TextSm>
                        <TextSm>0.0008 BNB</TextSm>
                    </BillingOneLine>
                    <BillingOneLineRight>
                        <TextSm>0.70 €</TextSm>
                    </BillingOneLineRight>
                    <BillingOneLine>
                        <TextSm>This will ENABLE BUSD for swapping</TextSm>
                        <TextSmUnderline onClick={() => setOpenEditLimit(true)}>Edit limit</TextSmUnderline>
                    </BillingOneLine>
                    <hr style={{
                        width: "100%",
                    }}/>
                    <BillingOneLine>
                        <TextSm style={{
                            marginRight: `${marginSm}px`
                        }}>Quotes include a 0,875% MetaMask fee</TextSm>
                        <InfoIcon style={{
                            cursor: "pointer"
                        }} onClick={() => setOpenMetamaskFee(true)}/>
                        <div style={{
                            flexGrow: 1
                        }}></div>
                    </BillingOneLine>
                </BillingHighLight>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 0
            }}>
                <ButtonGreen onClick={() => {}}>Confirm Swap</ButtonGreen>
            </div>
            <ReactModal 
                isOpen={openQuote}
                contentLabel="Open Quote"
                onRequestClose={() => setOpenQuote(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <TextLg>Quotes overview</TextLg>
                <table style={{
                    height: "300px"
                }}>
                    <tr>
                        <td><TextMd>BNB Receiving</TextMd></td>
                        <td><TextMd>Estimated gas fee</TextMd></td>
                        <td><TextMd>Overall value</TextMd></td>
                    </tr>
                    {[0,1,2,3].map((val,id) => (<tr key={id}>
                        <td><TextMdUnderline onClick={() => {
                            setOpenQuoteDetail(true)
                        }}>0,00875</TextMdUnderline></td>
                        <td><TextMd>€ 0,52</TextMd></td>
                        <td><TextMd>BEST</TextMd></td>
                    </tr>))}
                </table>
            </ReactModal>
            <ReactModal 
                isOpen={openQuoteDetail}
                contentLabel="Open Quote"
                onRequestClose={() => setOpenQuoteDetail(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Left1Icon style={{cursor: "pointer"}} onClick={() => setOpenQuoteDetail(false)}/>
                    <TextLg style={{
                        marginLeft: `${marginMd}px`,
                    }}>Quote details</TextLg>
                </div>
                <Title>Rate</Title>
                <div style={{
                    display: "flex",
                    margin: `${marginSm}px 0`
                }}>
                    <TextMd style={{
                        marginRight: `${marginSm}px`
                    }}>1 BUSD = 0.0017000000 BNB</TextMd>
                    <RefreshIcon />
                </div>
                <Title>Max Slippage</Title>
                <TextMd>3 %</TextMd>
                <Title>Guaranteed amount</Title>
                <TextMd>0,0009 BNB (~€0,45)</TextMd>
                <Title>Estimated gas fee</Title>
                <TextMd>0,0009 BNB (~€0,45)</TextMd>
                <Title>Source</Title>
                <TextMd>This quote comes from <b>Pancakeswap</b> which finds the best price by splittiny your order between different decentralized exchanges</TextMd>
            </ReactModal>
            <ReactModal 
                isOpen={openEditLimit}
                contentLabel="Edit permision"
                onRequestClose={() => setOpenEditLimit(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Left1Icon style={{cursor: "pointer"}} onClick={() => setOpenEditLimit(false)}/>
                    <TextLg style={{
                        marginLeft: `${marginMd}px`,
                    }}>Edit permission</TextLg>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    marginBottom: `${marginMd}px`,
                }}>
                    <RadioButton style={{
                        marginTop: `${marginMd}px`
                    }} text={"Spend limit permission"} active={activeRadio === "default"} onClick={() => setActiveRadio("default")}></RadioButton>
                    <div style={{
                        paddingLeft: `${paddingMd}px`,
                        marginLeft: `${marginSm}px`,
                    }}>
                        <TextMd>Allow SWAPS to withdraw and spend up to the following amount:</TextMd>
                        <TextMd style={{
                            wordBreak: "break-all"
                        }}>115876456541635468436241654654654684635132468463513645654654654.3643454 BUSD</TextMd>
                    </div>
                    <RadioButton style={{
                        marginTop: `${marginMd}px`
                    }} text={"Custom spend limit"} active={activeRadio === "custom"} onClick={() => setActiveRadio("custom")}></RadioButton>
                    <div style={{
                        paddingLeft: `${paddingMd}px`,
                        marginLeft: `${marginSm}px`,
                    }}>
                        <TextMd>Enter a max spend limit</TextMd>
                    </div>
                    <AmountInput />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: "100%",
                    flexGrow: 0,
                }}>
                    <ButtonGreen onClick={() => {setOpenEditLimit(false)}}>Set</ButtonGreen>
                </div>
            </ReactModal>
            <ReactModal 
                isOpen={openGasFee}
                contentLabel="Gas Fee Estimation"
                onRequestClose={() => setOpenGasFee(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <XButton onClick={() => setOpenGasFee(false)}>X</XButton>
                <Title>Estimated gas fees</Title>
                <TextMd>Gas fees are paid to crypto miners who process transactions on the network.</TextMd>
                <TextMd>Metamask does not profit from gas fees. The “estimated gas fee” is what we expect the actual fee to be. The exact amount depends on network conditions.</TextMd>
                <TextMd>“max gas fee” is the most you’ll spend. When the network is volatile this can be a large amount.</TextMd>
            </ReactModal>
            <ReactModal 
                isOpen={openMetamaskFee}
                contentLabel="Metamask Swap Fee"
                onRequestClose={() => setOpenMetamaskFee(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <XButton onClick={() => setOpenMetamaskFee(false)}>X</XButton>
                <Title>MetaMask Swap fee</Title>
                <TextMd>Get the best price from the top liquidity sources every time. A fee of 0,875% is automatically factored into each quote, which supports ongoing development to make MetaMask even better</TextMd>
            </ReactModal>
        </>
    )
}

export default Confirm;
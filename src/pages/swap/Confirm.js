import { useState } from "react";
import SwapDownIcon from "../../components/Icons/SwapDown";
import RefreshIcon from "../../components/Icons/Refresh";
import InfoIcon from "../../components/Icons/Info";
import Text from "../../styled-components/Text";
import styled from "styled-components";
import HigtLight from "../../styled-components/HighLight";
import { borderRadiusSm, marginMd, marginSm, paddingMd, paddingSm, marginLg } from "../../constants/dimentions";
import Button from '../../styled-components/Button';
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

const TextUnderline = styled(Text)`
    text-decoration: underline;
    cursor: pointer;
`;

const Title = styled(Text)`
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
                <Text>0,175 BNB</Text>
                <SwapDownIcon  style={{
                    margin: `${marginMd}px 0`
                }}/>
                <Text>BUSD</Text>
                <Text style={{
                    margin: `${marginLg}px 0`
                }}>10</Text>
                <div style={{
                    display: "flex",
                    margin: `${marginSm}px 0`
                }}>
                    <Text style={{
                        marginRight: `${marginSm}px`
                    }}>1 BUSD = 0.0017000000 BNB</Text>
                    <RefreshIcon />
                </div>
                <BillingHighLight>
                    <BillingOneLine>
                        <Text>Using the best quote</Text>
                        <TextUnderline onClick={() => {setOpenQuote(true)}}>Details</TextUnderline>
                    </BillingOneLine>
                    <BillingOneLine>
                        <Text style={{
                            marginRight: `${marginSm}px`
                        }}>Estimated gas fee</Text>
                        <InfoIcon style={{
                            cursor: "pointer"
                        }} onClick={() => {setOpenGasFee(true)}}/>
                        <Text style={{
                            flexGrow: 1,
                            textAlign: "right",
                        }}>0.0008 BNB</Text>
                    </BillingOneLine>
                    <BillingOneLineRight>
                        <Text>0.39 €</Text>
                    </BillingOneLineRight>
                    <BillingOneLine>
                        <Text>Max gas fee</Text>
                        <Text>0.0008 BNB</Text>
                    </BillingOneLine>
                    <BillingOneLineRight>
                        <Text>0.70 €</Text>
                    </BillingOneLineRight>
                    <BillingOneLine>
                        <Text>This will ENABLE BUSD for swapping</Text>
                        <TextUnderline onClick={() => setOpenEditLimit(true)}>Edit limit</TextUnderline>
                    </BillingOneLine>
                    <hr style={{
                        width: "100%",
                    }}/>
                    <BillingOneLine>
                        <Text style={{
                            marginRight: `${marginSm}px`
                        }}>Quotes include a 0,875% MetaMask fee</Text>
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
                <Button onClick={() => {}}>Confirm Swap</Button>
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
                <Text>Quotes overview</Text>
                <table style={{
                    height: "300px"
                }}>
                    <tr>
                        <td><Text>BNB Receiving</Text></td>
                        <td><Text>Estimated gas fee</Text></td>
                        <td><Text>Overall value</Text></td>
                    </tr>
                    {[0,1,2,3].map((val,id) => (<tr key={id}>
                        <td><TextUnderline onClick={() => {
                            setOpenQuoteDetail(true)
                        }}>0,00875</TextUnderline></td>
                        <td><Text>€ 0,52</Text></td>
                        <td><Text>BEST</Text></td>
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
                    <Text style={{
                        marginLeft: `${marginMd}px`,
                    }}>Quote details</Text>
                </div>
                <Title>Rate</Title>
                <div style={{
                    display: "flex",
                    margin: `${marginSm}px 0`
                }}>
                    <Text style={{
                        marginRight: `${marginSm}px`
                    }}>1 BUSD = 0.0017000000 BNB</Text>
                    <RefreshIcon />
                </div>
                <Title>Max Slippage</Title>
                <Text>3 %</Text>
                <Title>Guaranteed amount</Title>
                <Text>0,0009 BNB (~€0,45)</Text>
                <Title>Estimated gas fee</Title>
                <Text>0,0009 BNB (~€0,45)</Text>
                <Title>Source</Title>
                <Text>This quote comes from <b>Pancakeswap</b> which finds the best price by splittiny your order between different decentralized exchanges</Text>
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
                    <Text style={{
                        marginLeft: `${marginMd}px`,
                    }}>Edit permission</Text>
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
                        <Text>Allow SWAPS to withdraw and spend up to the following amount:</Text>
                        <Text style={{
                            wordBreak: "break-all"
                        }}>115876456541635468436241654654654684635132468463513645654654654.3643454 BUSD</Text>
                    </div>
                    <RadioButton style={{
                        marginTop: `${marginMd}px`
                    }} text={"Custom spend limit"} active={activeRadio === "custom"} onClick={() => setActiveRadio("custom")}></RadioButton>
                    <div style={{
                        paddingLeft: `${paddingMd}px`,
                        marginLeft: `${marginSm}px`,
                    }}>
                        <Text>Enter a max spend limit</Text>
                    </div>
                    <AmountInput />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: "100%",
                    flexGrow: 0,
                }}>
                    <Button onClick={() => {setOpenEditLimit(false)}}>Set</Button>
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
                <Text>Gas fees are paid to crypto miners who process transactions on the network.</Text>
                <Text>Metamask does not profit from gas fees. The “estimated gas fee” is what we expect the actual fee to be. The exact amount depends on network conditions.</Text>
                <Text>“max gas fee” is the most you’ll spend. When the network is volatile this can be a large amount.</Text>
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
                <Text>Get the best price from the top liquidity sources every time. A fee of 0,875% is automatically factored into each quote, which supports ongoing development to make MetaMask even better</Text>
            </ReactModal>
        </>
    )
}

export default Confirm;
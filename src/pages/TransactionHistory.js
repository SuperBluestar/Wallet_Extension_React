import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import HighLight from "../styled-components/HighLight";
import SendIcon from "../components/Icons/Send";
import RefreshCheckIcon from "../components/Icons/RefreshCheck";
import ReceiveIcon from "../components/Icons/Receive";
import TextMd from "../styled-components/TextMd";
import { borderRadiusSm, marginMd, paddingSm, circleBtnSize, marginSm, paddingLg, paddingMd, topbarHeight } from "../constants/dimentions";
import ReactModal from 'react-modal';
import TextLg from "../styled-components/TextLg";
import HigtLight from "../styled-components/HighLight";

const SingleTransaction = styled.div`
    width: 100%;
`;

const TransactionDetail = styled.div`
    display: flex;
    margin: ${marginSm}px 0;
`;

const HighLightCircle = styled(HighLight)`
    border-radius: 1000px;
    width: ${circleBtnSize}px;
    height: ${circleBtnSize}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconTypes = {
    Send: <SendIcon />,
    RefreshCheck: <RefreshCheckIcon />,
    Receive: <ReceiveIcon />,
}

const TransactionStatus = {
    Confirmed: "Confirmed",
    Failed: "Failed"
}

const TransactionHistory = () => {
    const [openQuote, setOpenTransaction] = useState(false);
    const [openQuoteView, setOpenQuoteView] = useState(false);

    const SCOneLine = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: ${marginSm}px 0;
        width: 100%;
    `;

    const BillingHighLight = styled(HigtLight)`
        border-radius: ${borderRadiusSm}px;
        width: 100%;
        padding: ${paddingMd}px ${paddingSm}px;
        box-sizing: border-box;
    `;

    const TextMdUnderline = styled(TextMd)`
        text-decoration: underline;
        cursor: pointer;
    `;
    
    const [transactions, setTransactions] = useState([{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Send,
        text: "Sent BNB",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.RefreshCheck,
        text: "Smart contract interaction",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Send,
        text: "Sent BNB",
        status: TransactionStatus.Failed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.RefreshCheck,
        text: "Smart contract interaction",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Send,
        text: "Sent BNB",
        status: TransactionStatus.Failed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.RefreshCheck,
        text: "Smart contract interaction",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },])
    return (
        <ScrollContainer style={{
            padding: `${paddingLg}px`,
            height: `calc(100vh - ${topbarHeight}px - ${paddingLg * 2}px)`,
        }} vertical={true} horizontal={false} hideScrollbars={true}>
            {transactions.map((transaction, id) => (<SingleTransaction key={id}>
                <TextMd onClick={() => {setOpenTransaction(true)}}>{transaction.transactionNumber} - {transaction.timestamp} - {transaction.device}</TextMd>
                <TransactionDetail>
                    <HighLightCircle>
                        {transaction.type}
                    </HighLightCircle>
                    <div style={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        paddingLeft: `${paddingMd}px`,
                    }}>
                        <TextMd>{transaction.text}</TextMd>
                        <TextMd>{transaction.status}</TextMd>
                    </div>
                    <TextMd style={{
                        display: "flex",
                        alignItems: "center"
                    }}>{transaction.amount}</TextMd>
                </TransactionDetail>

                <ReactModal 
                isOpen={openQuote}
                contentLabel="Open Quote"
                onRequestClose={() => setOpenTransaction(false)}
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
                    <TextLg style={{marginBottom:"10%"}}>Smart Contract interaction</TextLg>
                    
                        <SCOneLine>
                            <TextMd>Status</TextMd>
                            <TextMd style={{textAlign:'right'}}>Date</TextMd>
                        </SCOneLine>
                        <SCOneLine style={{marginTop: "0"}}>
                            <TextMd style={{color: "#7EC8DF"}}>Confrimed</TextMd>
                            <TextMd style={{textAlign:'right'}}>26.10.2021</TextMd>
                        </SCOneLine>

                        <BillingHighLight style={{paddingTop: "0"}}>
                            <SCOneLine>
                                <TextMd>From</TextMd>
                                <TextMd style={{textAlign:'right'}}>To</TextMd>
                            </SCOneLine>
                            <SCOneLine style={{marginBottom:"0"}}>
                                <TextMd>0xfs...rt187</TextMd>
                                <TextMd style={{textAlign:'right'}}>0xfs...xpr48</TextMd>
                            </SCOneLine>
                        </BillingHighLight>

                        <SCOneLine>
                            <TextMd>Nonce</TextMd>
                        </SCOneLine>
                        <SCOneLine style={{marginTop: "0"}}>
                            <TextMd>#162</TextMd>
                        </SCOneLine>

                        <BillingHighLight style={{paddingTop: "0"}}>
                            <SCOneLine>
                                <TextMd>Amount</TextMd>
                                <TextMd style={{textAlign:'right'}}>0 €</TextMd>
                            </SCOneLine>
                            <SCOneLine>
                                <TextMd>Estimated gas fee</TextMd>
                                <TextMd style={{textAlign:'right'}}>0.3112 €</TextMd>
                            </SCOneLine>
                            <SCOneLine style={{marginBottom:"0"}}>
                                <TextMd>Total amount</TextMd>
                                <TextMd style={{textAlign:'right'}}>0.3112 €</TextMd>
                            </SCOneLine>
                        </BillingHighLight>

                        <TextMdUnderline style={{color: "#7EC8DF", marginTop: "10%"}} onClick={() => {setOpenQuoteView(true)}}>View on BSCscan</TextMdUnderline>
                </ReactModal>

                <ReactModal 
                isOpen={openQuoteView}
                contentLabel="Open Quote"
                onRequestClose={() => setOpenQuoteView(false)}
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
                    <TextLg style={{margin:"10% 0 10%"}}>OopS.</TextLg>
                    <TextLg>ERROR</TextLg>
                    <TextLg style={{marginBottom:"10%"}}>404</TextLg>
                    <TextLg style={{marginBottom:"10%", color:"#FF5656"}}>x _ X</TextLg>
                </ReactModal>

            </SingleTransaction>))}
        </ScrollContainer>
    )
}

export default TransactionHistory;
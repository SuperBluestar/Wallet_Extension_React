import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import HighLight from "../styled-components/HighLight";
import SendIcon from "../components/Icons/Send";
import RefreshCheckIcon from "../components/Icons/RefreshCheck";
import ReceiveIcon from "../components/Icons/Receive";
import TextMd from "../styled-components/TextMd";
import { circleBtnSize, marginSm, paddingLg, paddingMd, topbarHeight } from "../constants/dimentions";

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
                <TextMd>{transaction.transactionNumber} - {transaction.timestamp} - {transaction.device}</TextMd>
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
            </SingleTransaction>))}
        </ScrollContainer>
    )
}

export default TransactionHistory;
import { useState } from "react";
// import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import HighLight from "../styled-components/HighLight";
import SendIcon from "../components/Icons/Send";
import RefreshCheckIcon from "../components/Icons/RefreshCheck";
import ReceiveIcon from "../components/Icons/Receive";
import Text from "../styled-components/Text";
import { borderRadiusSm, marginMd, paddingSm, circleBtnSize, marginSm, paddingLg, paddingMd, topbarHeight, marginLg } from "../constants/dimentions";
import ReactModal from 'react-modal';
import HigtLight from "../styled-components/HighLight";
import PerfectScrollbar from 'react-perfect-scrollbar';

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

const TextUnderline = styled(Text)`
    text-decoration: underline;
    cursor: pointer;
`;

const TransactionHistory = (props) => {
    const [openTransactionDetail, setOpenTransactionDetail] = useState(false);
    
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
        <PerfectScrollbar style={{
            height: `calc(100vh - ${topbarHeight}px - ${paddingLg * 2}px)`,
            padding: `${paddingLg}px`
        }}>
        {/* <ScrollContainer style={{
            padding: `${paddingLg}px`,
            height: `calc(100vh - ${topbarHeight}px - ${paddingLg * 2}px)`,
        }} vertical={true} horizontal={false} hideScrollbars={true}> */}
            {transactions.map((transaction, id) => (<SingleTransaction key={id}>
                <Text>{transaction.transactionNumber} - {transaction.timestamp} - {transaction.device}</Text>
                <TransactionDetail>
                    <HighLightCircle style={{
                        cursor: "pointer"
                    }} onClick={() => {setOpenTransactionDetail(true)}}>
                        {transaction.type}
                    </HighLightCircle>
                    <div style={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        paddingLeft: `${paddingMd}px`,
                    }}>
                        <Text>{transaction.text}</Text>
                        <Text>{transaction.status}</Text>
                    </div>
                    <Text style={{
                        display: "flex",
                        alignItems: "center"
                    }}>{transaction.amount}</Text>
                </TransactionDetail>
            </SingleTransaction>))}
            
            <ReactModal 
                isOpen={openTransactionDetail}
                contentLabel="Smart Contract interaction"
                onRequestClose={() => setOpenTransactionDetail(false)}
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
                <Text style={{marginBottom: `${marginLg}px`}}>Smart Contract interaction</Text>
                
                <SCOneLine>
                    <Text>Status</Text>
                    <Text>Date</Text>
                </SCOneLine>
                <SCOneLine style={{marginTop: "0"}}>
                    <Text style={{color: "#7EC8DF"}} onClick={() => {
                        console.log(props)
                        props.openError()
                    }}>Confrimed</Text>
                    <Text>26.10.2021</Text>
                </SCOneLine>

                <BillingHighLight style={{paddingTop: "0"}}>
                    <SCOneLine>
                        <Text>From</Text>
                        <Text>To</Text>
                    </SCOneLine>
                    <SCOneLine style={{marginBottom:"0"}}>
                        <Text>0xfs...rt187</Text>
                        <Text>0xfs...xpr48</Text>
                    </SCOneLine>
                </BillingHighLight>

                <SCOneLine>
                    <Text>Nonce</Text>
                </SCOneLine>
                <SCOneLine style={{marginTop: "0"}}>
                    <Text>#162</Text>
                </SCOneLine>

                <BillingHighLight style={{paddingTop: "0"}}>
                    <SCOneLine>
                        <Text>Amount</Text>
                        <Text>0 €</Text>
                    </SCOneLine>
                    <SCOneLine>
                        <Text>Estimated gas fee</Text>
                        <Text>0.3112 €</Text>
                    </SCOneLine>
                    <SCOneLine style={{marginBottom:"0"}}>
                        <Text>Total amount</Text>
                        <Text>0.3112 €</Text>
                    </SCOneLine>
                </BillingHighLight>

                <TextUnderline style={{color: "#7EC8DF", marginTop: "10%"}} onClick={() => {
                    window.open("https://google.com")
                }}>View on BSCscan</TextUnderline>
            </ReactModal>
        {/* </ScrollContainer> */}
        </PerfectScrollbar>
    )
}

export default TransactionHistory;
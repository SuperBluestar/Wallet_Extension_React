import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import ButtonGreen from '../../styled-components/ButtonGreen';
import TextMd from '../../styled-components/TextMd';
import { topbarHeight, paddingLg } from "../../constants/dimentions";
import Title from "../../components/Title";
import Description from "../../components/Description";
import Switch from '../../components/Switch';
import HightLight from '../../styled-components/HighLight';
import { lightgray } from "../../constants/colors";
import { paddingSm, marginMd, borderRadiusSm } from "../../constants/dimentions";

const IpfsGateway = styled(HightLight)`
    width: 100%;
    box-sizing: border-box;
    background: ${lightgray};
    border-radius: ${borderRadiusSm}px;
    padding: ${paddingSm}px;
    display: flex;
    justify-content: center;
    margin-top: ${marginMd}px;
    margin-bottom: ${marginMd}px;
`;

const Advanced = () => {
    const [showHexData, setShowHexData] = useState(false);
    const [customizeNonce, setCustomizeNonce] = useState(false);
    const [logs, setLogs] = useState(false);
    return (
        <ScrollContainer style={{height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px)`}} vertical={true} horizontal={false} hideScrollbars={true}>
            <Title>Reset account</Title>
            <Description>protect your wallet by saving your secret recovery phrase in various places like on a piece of paper, password manager and/or the cloud.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>reset account</ButtonGreen>
            </div>
            <Title>IPFS Gateway</Title>
            <Description>protect your wallet by saving your secret recovery phrase in various places like on a piece of paper, password manager and/or the cloud.</Description>
            <IpfsGateway>
                <TextMd>https://cloudflare-ipfs.com/ipfs</TextMd>
            </IpfsGateway>
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Show hex data</Title>
                <Switch on={showHexData} onClick={() => setShowHexData(oldVal => !oldVal)}></Switch>
            </div>
            <Description>protect your wallet by saving your secret recovery phrase in various places like on a piece of paper, password manager and/or the cloud.</Description>
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Customise transaction nonce</Title>
                <Switch on={customizeNonce} onClick={() => setCustomizeNonce(oldVal => !oldVal)}></Switch>
            </div>
            <Description>protect your wallet by saving your secret recovery phrase in various places like on a piece of paper, password manager and/or the cloud.</Description>
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>State logs</Title>
                <Switch on={logs} onClick={() => setLogs(oldVal => !oldVal)}></Switch>
            </div>
            <Description>This will help metamask to debug an issue you might encounter.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>Download state logs</ButtonGreen>
            </div>
        </ScrollContainer>
    )
}

export default Advanced;
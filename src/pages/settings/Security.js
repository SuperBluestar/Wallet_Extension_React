import { useState } from "react";
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';
import { topbarHeight, paddingLg, metamaskInfoVideoWidth, metamaskInfoVideoHeight, borderRadiusSm, paddingSm, marginSm, marginMd, paddingMd } from '../../constants/dimentions';
import { lightgray } from '../../constants/colors';
import HightLight from '../../styled-components/HighLight';
import TextMd from '../../styled-components/TextMd';
import CheckIcon from '../../components/Icons/Check';
import ButtonGreen from '../../styled-components/ButtonGreen';
import Title from "../../components/Title";
import Description from "../../components/Description";
import ComboBox from '../../components/ComboBox';
import Switch from '../../components/Switch';

const MetamaskInfo = styled(HightLight)`
    width: ${metamaskInfoVideoWidth}px;
    height: ${metamaskInfoVideoHeight}px;
    border-radius: ${borderRadiusSm}px;
`;

const SecretRecoveryPhrase = styled(HightLight)`
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

const Security = () => {
    const [privacyMode, setPrivacyMode] = useState(false);
    const [incomingTransactoin, setIncomingTransactoin] = useState(false);
    return (
        <ScrollContainer style={{height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px)`}} vertical={true} horizontal={false} hideScrollbars={true}>
            <Title>Protect your wallet</Title>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: `${paddingMd}px`,
                paddingBottom: `${paddingMd}px`,
            }}>
                <MetamaskInfo>metamask info video</MetamaskInfo>
            </div>
            <Description>protect your wallet by saving your secret recovery phrase in various places like on a piece of paper, password manager and/or the cloud.</Description>
            <SecretRecoveryPhrase>
                <CheckIcon />
                <TextMd style={{
                    marginLeft: `${marginSm}px`,
                }}>Secret recovery phrase backed up</TextMd>
            </SecretRecoveryPhrase>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>Back up again</ButtonGreen>
                <ButtonGreen>Reveal phrase</ButtonGreen>
            </div>
            <Title>Password</Title>
            <Description>Choose a strong password to unlock metamask app on your device If you lose this password, you will need your Secret Recovery Phrase to re-import your wallet.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>Change password</ButtonGreen>
            </div>
            <Title>Auto-lock</Title>
            <Description>Choose the amount of time before the application automatically locks</Description>
            <ComboBox 
                list={[{text: "30 seconds"},{text: "1 minute"},{text: "2 minute"},{text: "5 minute"},]}
                onChange={() => {}}
            />
            <Title>Show private key for “Name of the account here”</Title>
            <Description>Choose the amount of time before the application automatically locks</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>Show private key</ButtonGreen>
            </div>
            <Title>Clear privacy data</Title>
            <Description>Clear privacy data so all websites must request access to view account information again.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>Clear privacy data</ButtonGreen>
            </div>
            <Title>Clear browser history</Title>
            <Description>Clear your entire browser history</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>Clear browser history</ButtonGreen>
            </div>
            <Title>Clear browser cookies</Title>
            <Description>Clear your entire browser’s cookies</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <ButtonGreen>Clear browser cookies</ButtonGreen>
            </div>
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Privacy mode</Title>
                <Switch on={privacyMode} onClick={() => setPrivacyMode(oldVal => !oldVal)}></Switch>
            </div>
            <Description>websites must request access to view your account information.</Description>
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Get incoming transactions</Title>
                <Switch on={incomingTransactoin} onClick={() => setIncomingTransactoin(oldVal => !oldVal)}></Switch>
            </div>
            <Description>Third party api is used to show your incoming transactions in the history. Turn off if you don’t want us to pull data from those services</Description>
        </ScrollContainer>
    )
}

export default Security;
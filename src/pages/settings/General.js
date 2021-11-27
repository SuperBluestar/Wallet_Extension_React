import TextLg from "../../styled-components/TextLg";
import TextSm from "../../styled-components/TextSm";
import styled from "styled-components";
import { borderRadiusSm, paddingMd, paddingSm, marginMd, topbarHeight, paddingLg, marginSm } from '../../constants/dimentions';
import { black, blue, lightgray } from '../../constants/colors';
import ScrollContainer from 'react-indiana-drag-scroll';
import RadioButton from '../../components/RadioButton';
import Switch from '../../components/Switch';
import ComboBox from '../../components/ComboBox';
import { useState } from "react";
import TextMd from "../../styled-components/TextMd";
import Title from "../../components/Title";
import Description from "../../components/Description";

const radioList = [{
    text: "Native", 
},{
    text: "Fiat", 
},]

const General = () => {
    const [hideTokensWithoutBalance, setHideTokensWithoutBalance] = useState(false);
    const [activeRadio, setActiveRadio] = useState(0);
    return (
        <ScrollContainer style={{height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px)`}} vertical={true} horizontal={false} hideScrollbars={true}>
            <Title>Currency conversion</Title>
            <Description>Display FIAT values in using a specific currency throughout the application</Description>
            <ComboBox 
                list={[{text: "EUR - EURO"},{text: "USD - DOLLAR"},]}
                onChange={() => {}}
            />
            <Title>Primary currency</Title>
            <Description>Select native to prioritize displaying values in the native currency of the chain (e.g. ETH). Select Fiat to prioritize displaying values in your selected fiat currency.</Description>
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
            }}>
                {radioList.map((radio, id) => (
                    <RadioButton key={id} text={radio.text} active={activeRadio === id} onClick={() => setActiveRadio(id)}></RadioButton>
                ))}
            </div>
            <Title>Current language</Title>
            <Description>Translate the application to a different supported laguage</Description>
            <ComboBox 
                list={[{text: "English"},{text: "German"},]}
                onChange={() => {}}
            />
            <Title>Search Engine</Title>
            <Description>Change the default search engine used when entering search terms in the URL bar.</Description>
            <ComboBox 
                list={[{text: "DuckDuckGo"},{text: "Google"},]}
                onChange={() => {}}
            />
            <div style={{
                display: "flex",
                marginBottom: `${marginMd}px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Hide tokens without balance</Title>
                <Switch on={hideTokensWithoutBalance} onClick={() => setHideTokensWithoutBalance(oldVal => !oldVal)}></Switch>
            </div>
            <Description>prevents tokens with no balance from displaying in your token listing</Description>
            <Title>Account identicon</Title>
            <div style={{
                display: "flex",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <div style={{
                        width: "39px",
                        height: "39px",
                        borderRadius: "1000px",
                        border: true ? "none" : `1px solid ${blue}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{
                            width: "33px",
                            height: "33px",
                            borderRadius: "1000px",
                            border: `1px solid ${black}`,
                        }}></div>
                    </div>
                    <TextMd style={{
                        marginLeft: `${marginSm}px`
                    }}>Jazzicons</TextMd>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <div style={{
                        width: "39px",
                        height: "39px",
                        borderRadius: "1000px",
                        border: false ? "none" : `1px solid ${blue}`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{
                            width: "33px",
                            height: "33px",
                            borderRadius: "1000px",
                            border: `1px solid ${black}`,
                        }}></div>
                    </div>
                    <TextMd style={{
                        marginLeft: `${marginSm}px`
                    }}>blockies</TextMd>
                </div>
            </div>
        </ScrollContainer>
    )
}

export default General;
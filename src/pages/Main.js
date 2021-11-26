import { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { white, gray } from '../constants/colors';
import { circleBtnSize, tabItemWidth, tabItemBorderRadius, paddingLg, marginSm, tabItemHeight, footerHeight, tokenItemHeight, votingItemHeight, borderRadiusSm, marginMd } from '../constants/dimentions';
import HighLight from "../styled-components/HighLight";
import TextSm from "../styled-components/TextSm";
import ButtonGray from "../styled-components/ButtonGray";
import ReceiveIcon from "../components/Icons/Receive";
import NFTFolder from "../components/NFTFolder";
import IssuerFolder from "../components/IssuerFolder";
import TextMd from '../styled-components/TextMd';
import ScrollContainer from 'react-indiana-drag-scroll';
import RightIcon from '../components/Icons/Right';
import TrashIcon from '../components/Icons/Trash';

const MainBoard = styled.div`
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
`;

const Board = styled.div`
    background-color: ${white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 11px;
`;

const Address = styled(HighLight)`
    padding: 10px 20px;
    margin: 9px auto;
`;

const TotalBalance = styled(TextSm)`
    margin: 0px auto;
`;

const BoardButtonGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 21px 0;
`;

const BoradButton = styled.div`
    & ${HighLight} {
        border-radius: 1000px;
        width: ${circleBtnSize}px;
        height: ${circleBtnSize}px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const TabMenu = styled.div`
    border-top-left-radius: ${tabItemBorderRadius}px;
    border-top-right-radius: ${tabItemBorderRadius}px;
    box-shadow: 0px -2px 6px grey;
    background-color: ${gray};
    &.active {
        background-color: ${white};
    }
`;

const Tabs = styled.div`
    display: flex;
    & ${TabMenu} {
        width: ${tabItemWidth}px;
        height: ${tabItemHeight}px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        padding-top: 8px;
        &:not(:first-child) {
            margin-left: -${marginSm}px;
        }
    }
`;

const TabPanel = styled.div`
    padding: ${paddingLg}px;
    margin-top: -${marginSm}px;
    background: ${white};
    height: 100%;
    z-index: 20;
`;

const MarketPlaceNFTs = styled.div`
    margin: 5px 0;
    display: flex;
    width: fit-content;
`;

const MarketPlaceIssuers = styled.div`
    margin: 5px 0;
    display: flex;
    width: fit-content;
`;

const Footer = styled.div`
    height: ${footerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TokenItem = styled.div`
    display: flex;
    height: ${tokenItemHeight}px;
    margin: ${marginSm}px 0px;
    & ${HighLight} {
        border-radius: 1000px;
        width: ${circleBtnSize}px;
        height: ${circleBtnSize}px;
    }
`;

const VotingItem = styled(HighLight)`
    width: calc(100% - ${marginSm}px);
    height: ${votingItemHeight}px;
    border-radius: ${borderRadiusSm}px;
    margin-bottom: ${marginMd}px;
    &.last-item {
        margin-bottom: 0px;
    }
`;

const SiteItem = styled.div`
    display: flex;
    height: ${tokenItemHeight}px;
    margin: ${marginSm}px 0px;
    & ${HighLight} {
        border-radius: 1000px;
        width: ${circleBtnSize}px;
        height: ${circleBtnSize}px;
    }
`;

const Main = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [{
        tabText: "Assets", 
        tabContent: <TabPanel>
            <ScrollContainer className="scroll-container" vertical={true} horizontal={true} hideScrollbars={true}>
                <TextMd>Marketplace</TextMd>
                <MarketPlaceNFTs>
                    {[0,0,0,0,0].map((nft, id) => {
                        return <NFTFolder key={id} />
                    })}
                </MarketPlaceNFTs>
                <TextMd>Issuer</TextMd>
                <MarketPlaceIssuers>
                    {[0,0,0,0,0].map((issuer, id) => {
                        return <IssuerFolder key={id} />
                    })}
                </MarketPlaceIssuers>
            </ScrollContainer>
            <Footer>
                <ButtonGray style={{
                    width: "80%",
                }}>Add NFTs</ButtonGray>
            </Footer>
        </TabPanel>
    },{
        tabText: "Voting", 
        tabContent: <TabPanel>
            <ScrollContainer style={{height: "200px"}} vertical={true} horizontal={false} hideScrollbars={false}>
                {[0,0,0,0,0,0,0,0,0].map((issuer, id) => {
                    return (<TokenItem key={id} >
                        <HighLight></HighLight>
                        <div style={{
                            marginLeft: marginSm,
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <TextMd>Balance</TextMd>
                            <TextMd>Amount of tokens</TextMd>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <RightIcon></RightIcon>
                        </div>
                    </TokenItem>)
                })}
            </ScrollContainer>
            <Footer>
                <ButtonGray style={{
                    width: "80%",
                }}>Add Token</ButtonGray>
            </Footer>
        </TabPanel>
    },{
        tabText: "Tokens", 
        tabContent: <TabPanel>
            <ScrollContainer style={{height: "260px"}} className="scroll-container" vertical={true} horizontal={false} hideScrollbars={false}>
                {[0,0,0,0,0,0,0,0].map((vote, id) => {
                    return (
                        <Link to={`/main/vote/${id}`} key={id}>
                            <VotingItem className={id === 7 ? "last-item" : ""}>Vote for new COB for nationalist pary</VotingItem>
                        </Link>
                    )
                })}
            </ScrollContainer>
        </TabPanel>
    },{
        tabText: "Connected sites", 
        tabContent: <TabPanel>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: marginSm,
            }}>
                <TextMd>SiteInfo</TextMd>
                <TextMd>Disconnect</TextMd>
            </div>
            <ScrollContainer style={{height: "260px"}} vertical={true} horizontal={false} hideScrollbars={false}>
                {[0,0,0,0,0,0,0,0,0].map((issuer, id) => {
                    return (<SiteItem key={id} >
                        <HighLight></HighLight>
                        <div style={{
                            marginLeft: marginSm,
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <TextMd>Site Name</TextMd>
                            <TextMd>Site Address</TextMd>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <TrashIcon></TrashIcon>
                        </div>
                    </SiteItem>)
                })}
            </ScrollContainer>
        </TabPanel>
    }];
    return (
        <MainBoard>
            <Board>
                <Address>Address</Address>
                <TotalBalance>Total Balance</TotalBalance>
                <BoardButtonGroup>
                    <BoradButton>
                        <HighLight>
                            <ReceiveIcon />
                        </HighLight>
                        Receive
                    </BoradButton>
                    <BoradButton>
                        <HighLight>A</HighLight>
                        Receive
                    </BoradButton>
                    <BoradButton>
                        <HighLight>A</HighLight>
                        Receive
                    </BoradButton>
                </BoardButtonGroup>
            </Board>
            <Tabs>
            {tabs.map((menu, id) => (
                <TabMenu onClick={() => setActiveTab(id)} key={id} className={activeTab === id ? "active" : ""} style={{
                    zIndex: activeTab === id ? 11 : 10 - id
                }}>
                    <TextMd>{menu.tabText}</TextMd>
                </TabMenu>
            ))}
            </Tabs>
            {tabs[activeTab].tabContent}
        </MainBoard>
    )
}

export default Main;

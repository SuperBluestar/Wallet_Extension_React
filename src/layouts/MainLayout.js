import { Outlet } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import TextLg from "../styled-components/TextLg";
import TextSm from "../styled-components/TextSm";
import ButtonGray from "../styled-components/ButtonGray";
import SidemenuOpenIcon from "../components/SidemenuOpenIcon";
import TextMd from "../styled-components/TextMd";
import SendIcon from "../components/Icons/Send";
import ExpandIcon from "../components/Icons/Expand";
import ConnectIcon from "../components/Icons/Connect";
import HistoryIcon from "../components/Icons/History";
import ShareIcon from "../components/Icons/Share";
import ScanIcon from "../components/Icons/Scan";
import FillKYCIcon from "../components/Icons/FillKYC";
import SettingsIcon from "../components/Icons/Settings";
import HelpIcon from "../components/Icons/Help";
import RequestIcon from "../components/Icons/Request";
import { useState } from "react";
import { white, gray, lightgray } from "../constants/colors";
import { topbarHeight, paddingSm, paddingMd, marginLg, marginSm } from "../constants/dimentions";
import SignalImg from "../components/SignalImg";
import styled from "styled-components";

const styles = {
    bmBurgerButton: {
        width: "50px",
        height: "50px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bmMenuWrap: {
      background: white,
      top: 0,
    },
    bmItemList: {
        display: "flex",
        flexDirection: "column",
    }
}

const Topbar = styled.div`
    width: 100%;
    height: ${topbarHeight}px;
    display: flex;
    justify-content: space-between;
    background-color: ${gray};
`;

const MenuTopboard = styled.div`
    background-color: ${white};
    padding: ${paddingMd}px;
`;
const MenuContent = styled.div`
    background-color: ${lightgray};
    padding: ${paddingMd}px;
    height: 100%;
`;

const SidebarButton = styled(ButtonGray)`
    width: calc(50% - 20px);
    margin: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
`;

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const Item = styled.li`
    margin-top: ${marginSm}px;
    margin-bottom: ${marginSm}px;
    display: flex;
    align-items: center;
`;

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
    }
    const openMenu = () => {
        setIsOpen(true);
    }
    return (
        <>
            <Topbar>
                <Menu 
                    isOpen={isOpen}
                    customBurgerIcon={ <SidemenuOpenIcon onClick={openMenu}/> }
                    customCrossIcon={ false } 
                    styles={styles}
                    width={'287px'} 
                >
                    <MenuTopboard>
                        <TextLg style={{
                            marginTop: marginLg,
                            marginBottom: marginLg
                        }}>VALO.id</TextLg>
                        <TextLg>Acconut name</TextLg>
                        <TextSm>Total Balance</TextSm>
                        <TextSm>Address</TextSm>
                        <div style={{display: "flex"}}>
                            <SidebarButton>
                                <SendIcon></SendIcon>
                                <TextMd>Send</TextMd>
                            </SidebarButton>
                            <SidebarButton>
                                <SendIcon></SendIcon>
                                <TextMd>Add funds</TextMd>
                            </SidebarButton>
                        </div>
                    </MenuTopboard>
                    <MenuContent>
                        <List>
                            <Item>
                                <ExpandIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Expand View</TextMd>
                            </Item>
                            <Item>
                                <ConnectIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Connected Sites</TextMd>
                            </Item>
                            <Item>
                                <HistoryIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Transaction History</TextMd>
                            </Item>
                            <Item>
                                <ShareIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Share my Public Address</TextMd>
                            </Item>
                            <Item>
                                <ScanIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>View on Etherscan</TextMd>
                            </Item>
                            <Item>
                                <FillKYCIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Fill your KYC</TextMd>
                            </Item>
                            <Item>
                                <SettingsIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Settings</TextMd>
                            </Item>
                            <Item>
                                <HelpIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Help</TextMd>
                            </Item>
                            <Item>
                                <RequestIcon />
                                <TextMd style={{
                                    marginLeft: 10
                                }}>Request a feature</TextMd>
                            </Item>
                        </List>
                    </MenuContent>
                </Menu>
                <div style={{
                    padding: paddingSm
                }}>
                    <TextLg style={{textAlign: "right"}}>Account Name</TextLg>
                    <div style={{display: "flex"}}>
                        <SignalImg signal={true}></SignalImg>
                        <TextSm>Current network (Ethereum mainnet etc)</TextSm>
                    </div>
                </div>
            </Topbar>
            <Outlet />
        </>
    )
}

export default MainLayout;
import { useNavigate } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { topbarHeight, paddingLg, contactItemHeight, marginSm, footerHeight, marginMd, marginLg } from "../../constants/dimentions";
import Title from "../../components/Title";
import TextMd from "../../styled-components/TextMd";
import ButtonGreen from "../../styled-components/ButtonGreen";
import TrashIcon from '../../components/Icons/Trash';
import SignalImg from '../../components/SignalImg';

const ContactItem = styled.div`
    display: flex;
    height: ${contactItemHeight}px;
    margin: ${marginSm}px 0px;
`;

const Footer = styled.div`
    height: ${footerHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const networks = [{
    name: "Ethereum Main Network"
},{
    name: "Ropsten test network"
},{
    name: "Kovan test network"
},{
    name: "Rinkeby test network"
},{
    name: "Goerli test network"
},{
    name: "Binance Smart Chain Mainnet"
},{
    name: "Matic Mainnet"
},]

const Networks = () => {
    const navigate = useNavigate();
    return (
        <>
            <ScrollContainer style={{height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px - ${footerHeight}px)`}} vertical={true} horizontal={false} hideScrollbars={true}>
                <ul style={{
                    listStyle: "none",
                    paddingLeft: 0,
                    marginTop: `${marginLg}px`,
                }}>
                    {networks.map((network, id) => {
                        return (
                            <li key={id} style={{
                                display: "flex",
                                margin: `${marginMd}px 0`,
                            }}>
                                <SignalImg signal={false}></SignalImg>
                                <TextMd style={{
                                    marginLeft: `${marginSm}px`
                                }}>{network.name}</TextMd>
                            </li>
                        )
                    })}
                </ul>
            </ScrollContainer>
            <Footer>
                <ButtonGreen style={{
                    width: "80%",
                }} onClick={() => navigate("/main/settings/add-network")}>Add Network</ButtonGreen>
            </Footer>
        </>
    )
}

export default Networks;
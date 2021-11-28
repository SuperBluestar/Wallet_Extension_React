import styled from 'styled-components';
import { paddingSm, topbarHeight, marginLg, marginSm } from '../constants/dimentions';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import TextLg from '../styled-components/TextLg';
import ButtonGreen from '../styled-components/ButtonGreen';
import ScrollContainer from "react-indiana-drag-scroll";

const SendLayout = styled.div`
    padding: ${paddingSm}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - ${topbarHeight}px - ${paddingSm * 2}px);
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
`;

const baseUrl = "/main/send"
const subUrls = [
    "",
    "/detail",
    "/confirm"
]
const toSubUrls = [
    `${baseUrl}/detail`,
    `${baseUrl}/confirm`,
    `/`,
]

const Send = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <SendLayout>
            <TextLg style={{
                margin: `${marginLg}px 0`,
            }}>Send</TextLg>
            <ScrollContainer style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: '90%',
            }} vertical={true} horizontal={false} hideScrollbars={true}>
                <Outlet />
            </ScrollContainer>
            <Footer>
                <ButtonGreen style={{
                    marginBottom: `${marginSm}px`,
                }} onClick={() => {navigate(toSubUrls[subUrls.indexOf(pathname.slice(baseUrl.length, pathname.length))])}}>Next</ButtonGreen>
            </Footer>
        </SendLayout>
    )
}

export default Send;
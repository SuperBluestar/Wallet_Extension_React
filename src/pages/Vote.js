import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextLg from '../styled-components/TextLg';
import TextMd from '../styled-components/TextMd';
import { coverImgHeight, paddingLg, paddingSm, footerHeight, topbarHeight, paddingMd } from '../constants/dimentions';
import { heavygray } from '../constants/colors';
// import ScrollContainer from 'react-indiana-drag-scroll';
import ButtonRed from '../styled-components/ButtonRed';
import ButtonGreen from '../styled-components/ButtonGreen';
import PerfectScrollbar from 'react-perfect-scrollbar';

const CoverImg = styled.div`
    width: 100%;
    height: ${coverImgHeight}px;
    background-color: ${heavygray};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextContent = styled.div`
    padding: ${paddingSm}px ${paddingLg}px;
`;

const Footer = styled.div`
    height: ${footerHeight}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px gray;
    flex-grow: 1;
`;

const Vote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(navigate)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - ${topbarHeight}px)`,
        }}>
            <CoverImg>
                <TextLg>Cover picture of voting subject</TextLg>
            </CoverImg>
            <TextContent>
                <PerfectScrollbar style={{
                    height: "260px",
                    paddingRight: `${paddingMd}px`
                }}>
                {/* <ScrollContainer style={{height: "260px"}} vertical={true} horizontal={false} hideScrollbars={false}> */}
                    <TextLg>Header 1</TextLg>
                    <TextMd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextMd>
                    <TextMd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextMd>
                    <TextMd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TextMd>
                {/* </ScrollContainer> */}
                </PerfectScrollbar>
            </TextContent>
            <Footer>
                <TextMd>Your vote:</TextMd>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-around",
                    width: "100%",
                }}>
                    <ButtonGreen onClick={() => {
                        navigate("/main/vote-success");
                    }}>YES</ButtonGreen>
                    <ButtonRed onClick={() => {
                        navigate("/main/vote-success");
                    }}>NO</ButtonRed>
                </div>
            </Footer>
        </div>
    )
}

export default Vote;

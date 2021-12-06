import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../styled-components/Text';
import { coverImgHeight, paddingLg, paddingSm, footerHeight, topbarHeight, paddingMd } from '../constants/dimentions';
import { heavygray } from '../constants/colors';
// import ScrollContainer from 'react-indiana-drag-scroll';
import ButtonRed from '../styled-components/ButtonRed';
import Button from '../styled-components/Button';
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
    padding: 22px 10px 0px 42px;
`;

const Footer = styled.div`
    height: 132px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 8px #00000044;
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
                <Text style={{
                    fontSize: "18px"
                }}>Cover picture of voting subject</Text>
            </CoverImg>
            <TextContent>
                <PerfectScrollbar style={{
                    height: "260px",
                    paddingRight: `${paddingMd}px`
                }}>
                {/* <ScrollContainer style={{height: "260px"}} vertical={true} horizontal={false} hideScrollbars={false}> */}
                    <Text style={{
                        fontSize: "18px",
                        marginBottom: "15px",
                    }}>Header 1</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                {/* </ScrollContainer> */}
                </PerfectScrollbar>
            </TextContent>
            <Footer>
                <Text style={{
                    marginBottom: "16px"
                }}>Your vote:</Text>
                <div style={{
                    display: 'flex',
                    justifyContent: "space-around",
                    width: "100%",
                }}>
                    <Button style={{
                        width: "111px",
                        height: "39px",
                        backgroundColor: "#15EA37",
                    }} onClick={() => {
                        navigate("/main/vote-success");
                    }}>YES</Button>
                    <Button style={{
                        width: "111px",
                        height: "39px",
                        backgroundColor: "#FF5656",
                    }} onClick={() => {
                        navigate("/main/vote-success");
                    }}>NO</Button>
                </div>
            </Footer>
        </div>
    )
}

export default Vote;

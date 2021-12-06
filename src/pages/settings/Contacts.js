import { useNavigate } from "react-router-dom";
// import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { topbarHeight, paddingLg, contactItemHeight, marginSm, footerHeight, paddingSm } from "../../constants/dimentions";
import Title from "../../components/Title";
import Text from "../../styled-components/Text";
import Button from "../../styled-components/Button";
import TrashIcon from '../../components/Icons/Trash';
import PerfectScrollbar from 'react-perfect-scrollbar';

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

const Contact = () => {
    const navigate = useNavigate();
    return (
        <>
            <PerfectScrollbar style={{
                height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px)`,
                paddingRight: `${paddingSm}px`
            }}>
            {/* <ScrollContainer style={{height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px - ${footerHeight}px)`}} vertical={true} horizontal={false} hideScrollbars={true}> */}
                <Title>My contacts</Title>
                {[0,0,0,0,0,0,0,0,0].map((contact, id) => {
                    return (<ContactItem key={id} >
                        <div style={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <Text style={{
                                fontSize: "10px"
                            }}>Crypto.com wallet</Text>
                            <Text style={{
                                fontSize: "10px"
                            }}>*public wallet address here*</Text>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <TrashIcon width={19} height={20}></TrashIcon>
                        </div>
                    </ContactItem>)
                })}
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
            <Footer>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }} onClick={() => navigate("/main/settings/add-contact")}>Add contact</Button>
            </Footer>
        </>
    )
}

export default Contact;
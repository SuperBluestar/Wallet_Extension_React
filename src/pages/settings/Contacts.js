import { useNavigate } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { topbarHeight, paddingLg, contactItemHeight, marginSm, footerHeight } from "../../constants/dimentions";
import Title from "../../components/Title";
import TextMd from "../../styled-components/TextMd";
import ButtonGreen from "../../styled-components/ButtonGreen";
import TrashIcon from '../../components/Icons/Trash';

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
            <ScrollContainer style={{height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px - ${footerHeight}px)`}} vertical={true} horizontal={false} hideScrollbars={true}>
                <Title>My contacts</Title>
                {[0,0,0,0,0,0,0,0,0].map((contact, id) => {
                    return (<ContactItem key={id} >
                        <div style={{
                            marginLeft: marginSm,
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <TextMd>Crypto.com wallet</TextMd>
                            <TextMd>*public wallet address here*</TextMd>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <TrashIcon></TrashIcon>
                        </div>
                    </ContactItem>)
                })}
            </ScrollContainer>
            <Footer>
                <ButtonGreen style={{
                    width: "80%",
                }} onClick={() => navigate("/main/settings/add-contact")}>Add contact</ButtonGreen>
            </Footer>
        </>
    )
}

export default Contact;